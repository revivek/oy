'use strict';

var _Oy = require('../Oy');

var _Oy2 = _interopRequireDefault(_Oy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Oy', function () {
  it('should expose PropTypes, Element, and renderTemplate', function () {
    expect(_Oy2.default.PropTypes).toBeDefined();
    expect(_Oy2.default.PropTypes.rules).toBeDefined();
    expect(_Oy2.default.Element).toBeDefined();
    expect(_Oy2.default.renderTemplate).toBeDefined();
  });

  it('should use provided base template generator by default', function () {
    var shouldThrow = function shouldThrow() {
      _Oy2.default.renderTemplate({
        title: 'Foo bar',
        bodyContent: '<h1>Testing</h1>'
      });
    };

    expect(shouldThrow).toThrow();

    var rawHTML = _Oy2.default.renderTemplate({
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

  it('should use custom base template generator', function () {
    var generateCustomTemplate = function generateCustomTemplate() {
      return '<h1>Testing 123</h1>';
    };

    var rawHTML = _Oy2.default.renderTemplate({}, generateCustomTemplate);
    expect(rawHTML).toEqual('<h1>Testing 123</h1>');
  });

  it('should warn on outputs larger than 100KB', function () {
    console.warn = jasmine.createSpy('log');
    var rawHTML = _Oy2.default.renderTemplate({
      title: 'Foo bar',
      bodyContent: Array(1024 * 101).join('.'),
      previewText: 'Baz qux'
    });
    expect(console.warn).toHaveBeenCalled();
  });

  it('should set default dir attribute when generating default template', function () {
    var rawHTML = _Oy2.default.renderTemplate({
      title: 'Foo bar',
      bodyContent: '<h1>Testing</h1>',
      previewText: 'Baz qux'
    });

    expect(rawHTML).toContain('dir="ltr"');
    expect(rawHTML).not.toContain('lang');
  });

  it('should set overriding dir attribute when generating default template', function () {
    var rawHTML = _Oy2.default.renderTemplate({
      title: 'Foo bar',
      bodyContent: '<h1>Testing</h1>',
      previewText: 'Baz qux',
      dir: 'rtl'
    });

    expect(rawHTML).toContain('dir="rtl"');
    expect(rawHTML).not.toContain('lang');
  });

  it('should set lang attribute when generating default template', function () {
    var rawHTML = _Oy2.default.renderTemplate({
      title: 'Foo bar',
      bodyContent: '<h1>Testing</h1>',
      previewText: 'Baz qux',
      lang: 'fr'
    });

    expect(rawHTML).toContain('dir="ltr"');
    expect(rawHTML).toContain('lang="fr"');
  });
});