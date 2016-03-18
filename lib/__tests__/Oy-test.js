'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Oy = require('../Oy');

var _Oy2 = _interopRequireDefault(_Oy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Oy', function () {
  it('should expose renderTemplate', function () {
    expect(_Oy2.default.renderTemplate).toBeDefined();
  });

  it('should use provided base template generator by default', function () {
    var Foo = function Foo() {
      return _react2.default.createElement(
        'h1',
        null,
        'Testing'
      );
    };
    var rawHTML = _Oy2.default.renderTemplate(_react2.default.createElement(Foo, null), {
      title: 'Foo bar',
      previewText: 'Baz qux',
      headCSS: '.foo { color: red; }'
    });

    expect(rawHTML).toContain('<title>Foo bar</title>');
    expect(rawHTML).toContain('Baz qux');
    expect(rawHTML).toContain('<h1>Testing</h1>');
    expect(rawHTML).toContain('.foo{color:red}');
  });

  it('should use custom base template generator', function () {
    var Foo = function Foo() {
      return _react2.default.createElement(
        'h1',
        null,
        'should not render'
      );
    };
    var generateCustomTemplate = function generateCustomTemplate() {
      return '<h1>Testing 123</h1>';
    };
    var rawHTML = _Oy2.default.renderTemplate(_react2.default.createElement(Foo, null), {}, generateCustomTemplate);

    expect(rawHTML).toEqual('<h1>Testing 123</h1>');
  });

  it('should warn on outputs larger than 100KB', function () {
    spyOn(console, 'warn');
    var Foo = function Foo() {
      return _react2.default.createElement(
        'h1',
        null,
        Array(1024 * 101).join('.')
      );
    };
    var rawHTML = _Oy2.default.renderTemplate(_react2.default.createElement(Foo, null), {
      title: 'Foo bar',
      previewText: 'Baz qux'
    });

    expect(console.warn).toHaveBeenCalledWith('Email output is 103KB. It is recommended to keep the delivered HTML ' + 'to smaller than 100KB, to avoid getting emails cut off or rejected ' + 'due to spam.');
  });

  it('should set default dir attribute when generating default template', function () {
    var Foo = function Foo() {
      return _react2.default.createElement(
        'h1',
        null,
        'Testing'
      );
    };
    var rawHTML = _Oy2.default.renderTemplate(_react2.default.createElement(Foo, null), {
      title: 'Foo bar',
      previewText: 'Baz qux'
    });

    expect(rawHTML).toContain('dir="ltr"');
    expect(rawHTML).not.toContain('lang');
  });

  it('should set overriding dir attribute when generating default template', function () {
    var Foo = function Foo() {
      return _react2.default.createElement(
        'h1',
        null,
        'Testing'
      );
    };
    var rawHTML = _Oy2.default.renderTemplate(_react2.default.createElement(Foo, null), {
      title: 'Foo bar',
      previewText: 'Baz qux',
      dir: 'rtl'
    });

    expect(rawHTML).toContain('dir="rtl"');
    expect(rawHTML).not.toContain('lang');
  });

  it('should set lang attribute when generating default template', function () {
    var Foo = function Foo() {
      return _react2.default.createElement(
        'h1',
        null,
        'Testing'
      );
    };
    var rawHTML = _Oy2.default.renderTemplate(_react2.default.createElement(Foo, null), {
      title: 'Foo bar',
      previewText: 'Baz qux',
      lang: 'fr'
    });

    expect(rawHTML).toContain('dir="ltr"');
    expect(rawHTML).toContain('lang="fr"');
  });

  it('should consume the component as the first parameter', function () {
    var Foo = function Foo() {
      return _react2.default.createElement(
        'div',
        null,
        'should be rendered'
      );
    };
    var rawHTML = _Oy2.default.renderTemplate(_react2.default.createElement(Foo, null), {
      title: 'A title',
      previewText: 'Some preview text.',
      headCSS: '.foo { color: red; }'
    });

    expect(rawHTML).toContain('should be rendered');
    expect(rawHTML).toContain('.foo{color:red}');
  });

  it('should escape the template options for the new renderTemplate structure', function () {
    var Foo = function Foo() {
      return _react2.default.createElement(
        'div',
        null,
        'should be rendered'
      );
    };
    var rawHTML = _Oy2.default.renderTemplate(_react2.default.createElement(Foo, null), {
      title: '</title><meta http-equiv="Content-Type"  content="text/html charset="ISO-8859-1" /><title>',
      previewText: '<script>alert(\'evil\')</script>'
    });

    expect(rawHTML).toContain('should be rendered');
    expect(rawHTML).toContain('&lt;/title&gt;&lt;meta http-equiv=&#34;Content-Type&#34;  content=&#34;text/html charset=&#34;ISO-8859-1&#34; /&gt;&lt;title&gt;');
    expect(rawHTML).toContain('&lt;script&gt;alert(\'evil\')&lt;/script&gt;');
  });

  it('should throw on unsafe css', function () {
    var Foo = function Foo() {
      return _react2.default.createElement(
        'div',
        null,
        'should be rendered'
      );
    };
    var shouldThrowBecauseOfMozBinding = function shouldThrowBecauseOfMozBinding() {
      _Oy2.default.renderTemplate(_react2.default.createElement(Foo, null), {
        title: 'foo',
        previewText: 'bar',
        headCSS: 'body{-moz-binding: url("http://www.website.com/xss.xml#test")}'
      });
    };
    var shouldThrowBecauseOfExpression = function shouldThrowBecauseOfExpression() {
      _Oy2.default.renderTemplate(_react2.default.createElement(Foo, null), {
        title: 'foo',
        previewText: 'bar',
        headCSS: 'body{xss:expr/*XSS*/ession(alert("XSS"))}'
      });
    };
    var shouldThrowBecauseOfClosingStyleTag = function shouldThrowBecauseOfClosingStyleTag() {
      _Oy2.default.renderTemplate(_react2.default.createElement(Foo, null), {
        title: 'foo',
        previewText: 'bar',
        headCSS: '</style>'
      });
    };

    expect(shouldThrowBecauseOfMozBinding).toThrow();
    expect(shouldThrowBecauseOfExpression).toThrow();
    expect(shouldThrowBecauseOfClosingStyleTag).toThrow();
  });

  // This fails due to a test in utils/__tests__/Tree-test that logs the
  // same error. There seems to be some caching happening if an error occurs.
  // TODO: File a bug on this and uncomment when it's fixed.
  //it('should raise warning on basic validation error', function() {
  //  spyOn(console, 'error');
  //  const FooA = () => <Oy.A href="example.com">a link</Oy.A>;
  //  const rawHTML = Oy.renderTemplate(<FooA />, {
  //    title: 'Foo bar',
  //    previewText: 'Baz qux'
  //  });
  //  expect(console.error).toHaveBeenCalledWith(
  //    'Warning: Failed propType: Relative links can break (i.e. if ' +
  //    'recipients are outside the company network) and make your ' +
  //    'content unavailable to view Check the render method of `FooA`.'
  //  );
  //});
});