'use strict';

var _EmptyTDRule = require('../EmptyTDRule');

var _EmptyTDRule2 = _interopRequireDefault(_EmptyTDRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EmptyTDRule', function () {
  it('should ignore non-empty children', function () {
    var result = (0, _EmptyTDRule2.default)({ children: 'a' });
    expect(result instanceof Error).toEqual(false);
  });

  it('should ignore children that are Objects', function () {
    var result = (0, _EmptyTDRule2.default)({ children: {} });
    expect(result instanceof Error).toEqual(false);
  });

  it('should ignore non-empty dangerouslySetInnerHTML', function () {
    var result = (0, _EmptyTDRule2.default)({ dangerouslySetInnerHTML: { __html: 'a' } });
    expect(result instanceof Error).toEqual(false);
  });

  it('should return error if lineHeight and fontSize are not defined', function () {
    var result = (0, _EmptyTDRule2.default)({ children: undefined });
    expect(result instanceof Error).toEqual(true);
  });

  it('should not return error, given lineHeight and fontSize', function () {
    var result = (0, _EmptyTDRule2.default)({
      children: undefined,
      style: {
        fontSize: '1px',
        lineHeight: '1px'
      }
    });
    expect(result instanceof Error).toEqual(false);
  });

  it('should return error for whitespace children', function () {
    var result = (0, _EmptyTDRule2.default)({
      children: ' '
    });
    expect(result instanceof Error).toEqual(true);
  });

  it('should not return error for whitespace children, given lineHeight and fontSize', function () {
    var result = (0, _EmptyTDRule2.default)({
      children: ' ',
      style: {
        fontSize: '1px',
        lineHeight: '1px'
      }
    });
    expect(result instanceof Error).toEqual(false);
  });

  it('should return error for &nbsp; children', function () {
    var result = (0, _EmptyTDRule2.default)({
      children: ' &nbsp;'
    });
    expect(result instanceof Error).toEqual(true);
  });

  it('should not return error for &nbsp; children, given lineHeight and fontSize', function () {
    var result = (0, _EmptyTDRule2.default)({
      children: ' &nbsp;',
      style: {
        fontSize: '1px',
        lineHeight: '1px'
      }
    });
    expect(result instanceof Error).toEqual(false);
  });

  it('should return error for children array with empty elements', function () {
    var result = (0, _EmptyTDRule2.default)({
      children: [' &nbsp;', ' ']
    });
    expect(result instanceof Error).toEqual(true);
  });

  it('should not return error for children array with empty elements, given lineHeight and fontSize', function () {
    var result = (0, _EmptyTDRule2.default)({
      children: [' &nbsp;', ' '],
      style: {
        fontSize: '1px',
        lineHeight: '1px'
      }
    });
    expect(result instanceof Error).toEqual(false);
  });

  it('should return error for dangerouslySetInnerHTML with empty entity', function () {
    var result = (0, _EmptyTDRule2.default)({
      dangerouslySetInnerHTML: { __html: '&nbsp;' }
    });
    expect(result instanceof Error).toEqual(true);
  });

  it('should not return error for dangerouslySetInnerHTML with empty entity, given lineHeight and fontSize', function () {
    var result = (0, _EmptyTDRule2.default)({
      dangerouslySetInnerHTML: { __html: '&nbsp;' },
      style: {
        fontSize: '1px',
        lineHeight: '1px'
      }
    });
    expect(result instanceof Error).toEqual(false);
  });
});