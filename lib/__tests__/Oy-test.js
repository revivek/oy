'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Oy = require('../Oy');

var _Oy2 = _interopRequireDefault(_Oy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Oy', function () {
  beforeEach(function () {
    // TODO: Don't swallow all warnings by default.
    console.warn = function () {/* no-op by default */};
  });

  it('should expose PropTypes and renderTemplate', function () {
    expect(_Oy2.default.PropTypes).toBeDefined();
    expect(_Oy2.default.renderTemplate).toBeDefined();
  });

  it('should expose PropTypes validation rules', function () {
    expect(_Oy2.default.PropTypes.EmptyTDRule).toBeDefined();
    expect(_Oy2.default.PropTypes.HrefAbsoluteURLRule).toBeDefined();
    expect(_Oy2.default.PropTypes.ImgAltTextRule).toBeDefined();
    expect(_Oy2.default.PropTypes.ImgAltTextStyleRule).toBeDefined();
    expect(_Oy2.default.PropTypes.ImgDimensionsRule).toBeDefined();
    expect(_Oy2.default.PropTypes.ShorthandFontRule).toBeDefined();
    expect(_Oy2.default.PropTypes.SixCharacterHexBackgroundColorRule).toBeDefined();
    expect(_Oy2.default.PropTypes.SrcAbsoluteURLRule).toBeDefined();
    expect(_Oy2.default.PropTypes.TableBorderRule).toBeDefined();
    expect(_Oy2.default.PropTypes.TableCellPaddingRule).toBeDefined();
    expect(_Oy2.default.PropTypes.TableCellSpacingRule).toBeDefined();
  });

  it('should expose Table, TBody, TR, TD, Img, and A', function () {
    expect(_Oy2.default.Table).toBeDefined();
    expect(_Oy2.default.TBody).toBeDefined();
    expect(_Oy2.default.TR).toBeDefined();
    expect(_Oy2.default.TD).toBeDefined();
    expect(_Oy2.default.Img).toBeDefined();
    expect(_Oy2.default.A).toBeDefined();
  });

  it('should additionally export components directly', function () {
    expect(_Oy.Table).toBeDefined();
    expect(_Oy.TBody).toBeDefined();
    expect(_Oy.TR).toBeDefined();
    expect(_Oy.TD).toBeDefined();
    expect(_Oy.Img).toBeDefined();
    expect(_Oy.A).toBeDefined();
  });

  it('should use provided base template generator by default', function () {
    var shouldThrow = function shouldThrow() {
      _Oy2.default.renderTemplate(_react2.default.createElement(
        'h1',
        null,
        'Testing'
      ), {
        title: 'Foo bar'
      });
    };

    expect(shouldThrow).toThrow();

    var rawHTML = _Oy2.default.renderTemplate(_react2.default.createElement(
      'h1',
      null,
      'Testing'
    ), {
      title: 'Foo bar',
      previewText: 'Baz qux',
      headCSS: '.foo { color: red; }',
      bgColor: '#FF0000'
    });

    expect(rawHTML).toContain('<title>Foo bar</title>');
    expect(rawHTML).toContain('Baz qux');
    expect(rawHTML).toContain('<h1>Testing</h1>');
    expect(rawHTML).toContain('.foo{color:red}');
    expect(rawHTML).toContain('bgcolor="#FF0000"');
  });

  it('should use custom base template generator', function () {
    var generateCustomTemplate = function generateCustomTemplate() {
      return '<h1>Testing 123</h1>';
    };

    var rawHTML = _Oy2.default.renderTemplate(_react2.default.createElement(
      'h1',
      null,
      'test'
    ), {}, generateCustomTemplate);
    expect(rawHTML).toEqual('<h1>Testing 123</h1>');
  });

  it('should warn on outputs larger than 100KB', function () {
    console.warn = jasmine.createSpy('log');
    var rawHTML = _Oy2.default.renderTemplate(_react2.default.createElement(
      'p',
      null,
      Array(1024 * 101).join('.')
    ), {
      title: 'Foo bar',
      previewText: 'Baz qux'
    });
    expect(console.warn).toHaveBeenCalled();
  });

  it('should set default dir attribute when generating default template', function () {
    var rawHTML = _Oy2.default.renderTemplate(_react2.default.createElement(
      'h1',
      null,
      'Testing'
    ), {
      title: 'Foo bar',
      previewText: 'Baz qux'
    });

    expect(rawHTML).toContain('dir="ltr"');
    expect(rawHTML).not.toContain('lang');
  });

  it('should set overriding dir attribute when generating default template', function () {
    var rawHTML = _Oy2.default.renderTemplate(_react2.default.createElement(
      'h1',
      null,
      'Testing'
    ), {
      title: 'Foo bar',
      previewText: 'Baz qux',
      dir: 'rtl'
    });

    expect(rawHTML).toContain('dir="rtl"');
    expect(rawHTML).not.toContain('lang');
  });

  it('should set lang attribute when generating default template', function () {
    var rawHTML = _Oy2.default.renderTemplate(_react2.default.createElement(
      'h1',
      null,
      'Testing'
    ), {
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

    expect(shouldThrowBecauseOfMozBinding).toThrow();
    expect(shouldThrowBecauseOfExpression).toThrow();
  });

  it('should raise warning on basic validation error', function () {
    console.error = jasmine.createSpy('propType');
    var FooA = function FooA() {
      return _react2.default.createElement(
        _Oy2.default.A,
        { href: 'example.com' },
        'a link'
      );
    };
    var rawHTML = _Oy2.default.renderTemplate(_react2.default.createElement(FooA, null), {
      title: 'Foo bar',
      previewText: 'Baz qux'
    });
    expect(console.error).toHaveBeenCalledWith('Warning: Failed prop type: Relative links can break (i.e. if ' + 'recipients are outside the company network) and make your ' + 'content unavailable to view\n    in A\n    in FooA');
  });
});