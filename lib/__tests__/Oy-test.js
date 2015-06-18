'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Oy = require('../Oy');

var _Oy2 = _interopRequireDefault(_Oy);

describe('Oy', function () {
  it('expose Mixin, which implements certain methods', function () {
    _assert2['default'].notEqual(_Oy2['default'].Mixin, undefined);
    _assert2['default'].notEqual(_Oy2['default'].rule, undefined);
    _assert2['default'].notEqual(_Oy2['default'].renderTemplate, undefined);
  });
});