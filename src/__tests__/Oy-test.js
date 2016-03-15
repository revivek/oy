import React from 'react';

import Oy from '../Oy';


describe('Oy', function() {
  beforeEach(function() {
    console.warn = () => { /* no-op by default */ };
  });

  it('should expose PropTypes, Element, and renderTemplate', function() {
    expect(Oy.PropTypes).toBeDefined();
    expect(Oy.PropTypes.rules).toBeDefined();
    expect(Oy.Element).toBeDefined();
    expect(Oy.renderTemplate).toBeDefined();
  });

  it('should expose Table, TBody, TR, TD, Img, and A', function() {
    expect(Oy.Table).toBeDefined();
    expect(Oy.TBody).toBeDefined();
    expect(Oy.TR).toBeDefined();
    expect(Oy.TD).toBeDefined();
    expect(Oy.Img).toBeDefined();
    expect(Oy.A).toBeDefined();
  });

  it('should use provided base template generator by default', function() {
    const shouldThrow = () => {
      Oy.renderTemplate({
        title: 'Foo bar',
        bodyContent: '<h1>Testing</h1>'
      });
    };

    expect(shouldThrow).toThrow();

    const rawHTML = Oy.renderTemplate({
      title: 'Foo bar',
      bodyContent: '<h1>Testing</h1>',
      previewText: 'Baz qux',
      headCSS: '.foo { color: red; }'
    });

    expect(rawHTML).toContain('<title>Foo bar</title>');
    expect(rawHTML).toContain('Baz qux');
    expect(rawHTML).toContain('<h1>Testing</h1>');
    expect(rawHTML).toContain('.foo { color: red; }');
  });

  it('should use custom base template generator', function() {
    const generateCustomTemplate = () => {
      return '<h1>Testing 123</h1>';
    };

    const rawHTML = Oy.renderTemplate({}, generateCustomTemplate);
    expect(rawHTML).toEqual('<h1>Testing 123</h1>');
  });

  it('should warn on outputs larger than 100KB', function() {
    console.warn = jasmine.createSpy('log');
    const rawHTML = Oy.renderTemplate({
      title: 'Foo bar',
      bodyContent: Array(1024 * 101).join('.'),
      previewText: 'Baz qux'
    });
    expect(console.warn).toHaveBeenCalled();
  });

  it('should set default dir attribute when generating default template', function() {
    const rawHTML = Oy.renderTemplate({
      title: 'Foo bar',
      bodyContent: '<h1>Testing</h1>',
      previewText: 'Baz qux'
    });

    expect(rawHTML).toContain('dir="ltr"');
    expect(rawHTML).not.toContain('lang');
  });

  it('should set overriding dir attribute when generating default template', function() {
    const rawHTML = Oy.renderTemplate({
      title: 'Foo bar',
      bodyContent: '<h1>Testing</h1>',
      previewText: 'Baz qux',
      dir: 'rtl'
    });

    expect(rawHTML).toContain('dir="rtl"');
    expect(rawHTML).not.toContain('lang');
  });

  it('should set lang attribute when generating default template', function() {
    const rawHTML = Oy.renderTemplate({
      title: 'Foo bar',
      bodyContent: '<h1>Testing</h1>',
      previewText: 'Baz qux',
      lang: 'fr'
    });

    expect(rawHTML).toContain('dir="ltr"');
    expect(rawHTML).toContain('lang="fr"');
  });

  it('should consume the component as the first parameter', function() {
    const Foo = () => <div>should be rendered</div>;
    const rawHTML = Oy.renderTemplate(<Foo />, {
      title: 'A title',
      previewText: 'Some preview text.',
    });

    expect(rawHTML).toContain('should be rendered');
  });

  it('should escape the template options for the new renderTemplate structure', function() {
    const Foo = () => <div>should be rendered</div>;
    const rawHTML = Oy.renderTemplate(<Foo />, {
      title: '</title><meta http-equiv="Content-Type"  content="text/html charset="ISO-8859-1" /><title>',
      previewText: '<script>alert(\'evil\')</script>',
    });

    expect(rawHTML).toContain('should be rendered');
    expect(rawHTML).toContain('&lt;/title&gt;&lt;meta http-equiv=&#34;Content-Type&#34;  content=&#34;text/html charset=&#34;ISO-8859-1&#34; /&gt;&lt;title&gt;');
    expect(rawHTML).toContain('&lt;script&gt;alert(\'evil\')&lt;/script&gt;');
  });

  it('should throw on unsafe css', function() {
    const Foo = () => <div>should be rendered</div>;
    const shouldThrowBecauseOfMozBinding = () => {
      Oy.renderTemplate(<Foo />, {
        title: 'foo',
        previewText: 'bar',
        headCSS: 'body{-moz-binding: url("http://www.website.com/xss.xml#test")}'
      });
    };
    const shouldThrowBecauseOfExpression = () => {
      Oy.renderTemplate(<Foo />, {
        title: 'foo',
        previewText: 'bar',
        headCSS: 'body{xss:expr/*XSS*/ession(alert("XSS"))}'
      });
    };
    const shouldThrowBecauseOfClosingStyleTag = () => {
      Oy.renderTemplate(<Foo />, {
        title: 'foo',
        previewText: 'bar',
        headCSS: '</style>'
      });
    };

    expect(shouldThrowBecauseOfMozBinding).toThrow();
    expect(shouldThrowBecauseOfExpression).toThrow();
    expect(shouldThrowBecauseOfClosingStyleTag).toThrow();
  });

  it('should log a warning on the old renderTemplate API', function() {
    console.warn = jasmine.createSpy('log');
    const Foo = () => <div>should be rendered</div>;
    const rawHTML = Oy.renderTemplate({
      title: 'Foo bar',
      bodyContent: <Foo />,
      previewText: 'Baz qux'
    });
    expect(console.warn).toHaveBeenCalledWith(
      'Accepting bodyContent as an option is deprecated and will be removed ' +
      'in the next minor release. Instead, pass the top-level ReactElement ' +
      'as the first parameter, i.e. Oy.renderTemplate(<Template />, options)'
    );
  });
});
