'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Oy = require('../Oy');

var _Oy2 = _interopRequireDefault(_Oy);

describe('Oy', function () {
  it('should expose PropTypes, Element, and renderTemplate', function () {
    expect(_Oy2['default'].PropTypes).toBeDefined();
    expect(_Oy2['default'].PropTypes.rules).toBeDefined();
    expect(_Oy2['default'].Element).toBeDefined();
    expect(_Oy2['default'].renderTemplate).toBeDefined();
  });

  it('should use provided base template generator by default', function () {
    var shouldThrow = function shouldThrow() {
      _Oy2['default'].renderTemplate({
        title: 'Foo bar',
        bodyContent: '<h1>Testing</h1>'
      });
    };

    expect(shouldThrow).toThrow();

    var rawHTML = _Oy2['default'].renderTemplate({
      title: 'Foo bar',
      bodyContent: '<h1>Testing</h1>',
      previewText: 'Baz qux',
      headCSS: '.foo { color: red; }'
    });

    expect(rawHTML.indexOf('<title>Foo bar</title>') !== -1).toEqual(true);
    expect(rawHTML.indexOf('Baz qux') !== -1).toEqual(true);
    expect(rawHTML.indexOf('<h1>Testing</h1>') !== -1).toEqual(true);
    expect(rawHTML.indexOf('.foo { color: red; }') !== -1).toEqual(true);
  });

  it('should use custom base template generator', function () {
    var generateCustomTemplate = function generateCustomTemplate() {
      return '<h1>Testing 123</h1>';
    };

    var rawHTML = _Oy2['default'].renderTemplate({}, generateCustomTemplate);
    expect(rawHTML).toEqual('<h1>Testing 123</h1>');
  });
});