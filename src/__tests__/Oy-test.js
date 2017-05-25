import React from 'react';

import Oy from '../Oy';
import {Table, TBody, TR, TD, Img, A} from '../Oy';


describe('Oy', function() {
  beforeEach(function() {
    // TODO: Don't swallow all warnings by default.
    console.warn = () => { /* no-op by default */ };
  });

  it('should expose PropTypes, Element, and renderTemplate', function() {
    expect(Oy.PropTypes).toBeDefined();
    expect(Oy.Element).toBeDefined();
    expect(Oy.renderTemplate).toBeDefined();
  });

  it('should expose PropTypes validation rules', function() {
    expect(Oy.PropTypes.EmptyTDRule).toBeDefined();
    expect(Oy.PropTypes.HrefAbsoluteURLRule).toBeDefined();
    expect(Oy.PropTypes.ImgAltTextRule).toBeDefined();
    expect(Oy.PropTypes.ImgAltTextStyleRule).toBeDefined();
    expect(Oy.PropTypes.ImgDimensionsRule).toBeDefined();
    expect(Oy.PropTypes.ShorthandFontRule).toBeDefined();
    expect(Oy.PropTypes.SixCharacterHexBackgroundColorRule).toBeDefined();
    expect(Oy.PropTypes.SrcAbsoluteURLRule).toBeDefined();
    expect(Oy.PropTypes.TableBorderRule).toBeDefined();
    expect(Oy.PropTypes.TableCellPaddingRule).toBeDefined();
    expect(Oy.PropTypes.TableCellSpacingRule).toBeDefined();
  });

  it('should expose Table, TBody, TR, TD, Img, and A', function() {
    expect(Oy.Table).toBeDefined();
    expect(Oy.TBody).toBeDefined();
    expect(Oy.TR).toBeDefined();
    expect(Oy.TD).toBeDefined();
    expect(Oy.Img).toBeDefined();
    expect(Oy.A).toBeDefined();
  });

  it('should additionally export named default Element components', function() {
    expect(Table).toBeDefined();
    expect(TBody).toBeDefined();
    expect(TR).toBeDefined();
    expect(TD).toBeDefined();
    expect(Img).toBeDefined();
    expect(A).toBeDefined();
  });

  it('should use provided base template generator by default', function() {
    const shouldThrow = () => {
      Oy.renderTemplate(<h1>Testing</h1>, {
        title: 'Foo bar'
      });
    };

    expect(shouldThrow).toThrow();

    const rawHTML = Oy.renderTemplate(<h1>Testing</h1>, {
      title: 'Foo bar',
      previewText: 'Baz qux',
      headCSS: '.foo { color: red; }',
      bgColor: '#FF0000'
    });

    expect(rawHTML).toContain('<title>Foo bar</title>');
    expect(rawHTML).toContain('Baz qux');
    expect(rawHTML).toContain('<h1>Testing</h1>');
    expect(rawHTML).toContain('.foo{color:red}');
    expect(rawHTML).toContain('bgcolor="#FF0000"')
  });

  it('should use custom base template generator', function() {
    const generateCustomTemplate = () => {
      return '<h1>Testing 123</h1>';
    };

    const rawHTML = Oy.renderTemplate(<h1>test</h1>, {}, generateCustomTemplate);
    expect(rawHTML).toEqual('<h1>Testing 123</h1>');
  });

  it('should warn on outputs larger than 100KB', function() {
    console.warn = jasmine.createSpy('log');
    const rawHTML = Oy.renderTemplate(<p>{Array(1024 * 101).join('.')}</p>, {
      title: 'Foo bar',
      previewText: 'Baz qux'
    });
    expect(console.warn).toHaveBeenCalled();
  });

  it('should set default dir attribute when generating default template', function() {
    const rawHTML = Oy.renderTemplate(<h1>Testing</h1>, {
      title: 'Foo bar',
      previewText: 'Baz qux'
    });

    expect(rawHTML).toContain('dir="ltr"');
    expect(rawHTML).not.toContain('lang');
  });

  it('should set overriding dir attribute when generating default template', function() {
    const rawHTML = Oy.renderTemplate(<h1>Testing</h1>, {
      title: 'Foo bar',
      previewText: 'Baz qux',
      dir: 'rtl'
    });

    expect(rawHTML).toContain('dir="rtl"');
    expect(rawHTML).not.toContain('lang');
  });

  it('should set lang attribute when generating default template', function() {
    const rawHTML = Oy.renderTemplate(<h1>Testing</h1>, {
      title: 'Foo bar',
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
      headCSS: '.foo { color: red; }'
    });

    expect(rawHTML).toContain('should be rendered');
    expect(rawHTML).toContain('.foo{color:red}');
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

  it('should raise warning on basic validation error', function() {
    console.error = jasmine.createSpy('propType');
    const FooA = () => <Oy.A href="example.com">a link</Oy.A>;
    const rawHTML = Oy.renderTemplate(<FooA />, {
      title: 'Foo bar',
      previewText: 'Baz qux'
    });
    expect(console.error).toHaveBeenCalledWith(
      'Warning: Failed prop type: Relative links can break (i.e. if ' +
      'recipients are outside the company network) and make your ' +
      'content unavailable to view\n    in A (created by FooA)\n    ' +
      'in FooA'
    );
  });
});
