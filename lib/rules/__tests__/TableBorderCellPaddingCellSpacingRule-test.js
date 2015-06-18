'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _TableBorderCellPaddingCellSpacingRule = require('../TableBorderCellPaddingCellSpacingRule');

var _TableBorderCellPaddingCellSpacingRule2 = _interopRequireDefault(_TableBorderCellPaddingCellSpacingRule);

function shallowEqual(a, b) {
  var aProps = Object.keys(a);
  var bProps = Object.keys(b);
  var equal = true;

  if (aProps.length !== bProps.length) {
    return false;
  }

  aProps.forEach(function (aProp) {
    if (a[aProp] !== b[aProp]) {
      equal = false;
    }
  });

  return equal;
}

describe('TableBorderCellPaddingCellSpacingRule', function () {
  it('should define necessary properties', function () {
    ['name', 'description', 'validate', 'autocorrect'].forEach(function (property) {
      _assert2['default'].equal(_TableBorderCellPaddingCellSpacingRule2['default'].hasOwnProperty(property), true);
    });
  });

  it('should validate', function () {
    var result1 = _TableBorderCellPaddingCellSpacingRule2['default'].validate({});
    _assert2['default'].equal(result1, false);

    var result2 = _TableBorderCellPaddingCellSpacingRule2['default'].validate({ border: '0' });
    _assert2['default'].equal(result2, false);

    var result3 = _TableBorderCellPaddingCellSpacingRule2['default'].validate({ border: '0', cellPadding: '0' });
    _assert2['default'].equal(result3, false);

    var result4 = _TableBorderCellPaddingCellSpacingRule2['default'].validate({ border: '0', cellPadding: '0', cellSpacing: '0' });
    _assert2['default'].equal(result4, true);

    var result5 = _TableBorderCellPaddingCellSpacingRule2['default'].validate({ border: '0', cellPadding: '0', cellSpacing: '0', foo: '' });
    _assert2['default'].equal(result5, true);

    var result6 = _TableBorderCellPaddingCellSpacingRule2['default'].validate({ border: '0', cellPadding: '10', cellSpacing: '0', foo: '' });
    _assert2['default'].equal(result6, true);
  });

  it('should autocorrect when possible', function () {
    var result1 = _TableBorderCellPaddingCellSpacingRule2['default'].autocorrect({});
    _assert2['default'].equal(shallowEqual(result1, { border: '0', cellPadding: '0', cellSpacing: '0' }), true);

    var result2 = _TableBorderCellPaddingCellSpacingRule2['default'].autocorrect({ bgColor: '#ffffff' });
    _assert2['default'].equal(shallowEqual(result2, { border: '0', cellPadding: '0', cellSpacing: '0', bgColor: '#ffffff' }), true);

    var result3 = _TableBorderCellPaddingCellSpacingRule2['default'].autocorrect({ cellSpacing: '20' });
    _assert2['default'].equal(shallowEqual(result3, { border: '0', cellPadding: '0', cellSpacing: '20' }), true);

    var result4 = _TableBorderCellPaddingCellSpacingRule2['default'].autocorrect({ border: '10', cellPadding: '20', cellSpacing: '30' });
    _assert2['default'].equal(shallowEqual(result4, { border: '10', cellPadding: '20', cellSpacing: '30' }), true);
  });
});