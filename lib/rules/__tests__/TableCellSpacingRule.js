'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _TableCellSpacingRule = require('../TableCellSpacingRule');

var _TableCellSpacingRule2 = _interopRequireDefault(_TableCellSpacingRule);

describe('TableCellSpacingRule', function () {
  it('should validate', function () {
    var result1 = (0, _TableCellSpacingRule2['default'])({}, 'cellSpacing');
    _assert2['default'].equal(result1 instanceof Error, true);

    var result2 = (0, _TableCellSpacingRule2['default'])({ cellSpacing: '0' }, 'cellSpacing');
    _assert2['default'].equal(result2 instanceof Error, false);

    var result3 = (0, _TableCellSpacingRule2['default'])({ border: '0', cellSpacing: '0' }, 'cellSpacing');
    _assert2['default'].equal(result3 instanceof Error, false);
  });
});