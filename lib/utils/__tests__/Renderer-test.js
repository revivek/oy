'use strict';

var _Renderer = require('../Renderer');

var _Renderer2 = _interopRequireDefault(_Renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Renderer', function () {
  it('should log a warning on the old renderTemplate API', function () {
    console.warn = jasmine.createSpy('log');
    var rawHTML = _Renderer2.default.renderTemplate({
      title: 'Foo bar',
      bodyContent: '<div>hi</div>',
      previewText: 'Baz qux'
    });
    expect(console.warn).toHaveBeenCalledWith('Accepting bodyContent as an option is deprecated and will be removed ' + 'in the next minor release. Instead, pass the top-level ReactElement ' + 'as the first parameter, i.e. Oy.renderTemplate(<Template />, options)');
  });
});