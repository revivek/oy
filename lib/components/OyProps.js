'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _utilsHTML4 = require('../utils/HTML4');

var _utilsHTML42 = _interopRequireDefault(_utilsHTML4);

exports['default'] = {
  /**
   * To use Oy, we convert `data-foo` attributes to `foo` attributes in
   * renderTemplate(). This converts `foo` attributes to transformable
   * `data-*` form. This is to bypass React's attribute whitelist.
   */
  convertToTransformableProps: function convertToTransformableProps(props) {
    var supportedPropsUsed = Object.keys(_utilsHTML42['default'].supportedPropsToTransformableAttributes).filter(function (supportedProp) {
      return props.hasOwnProperty(supportedProp);
    });

    // Convert HTML4 props to transformable form.
    var transformableProps = supportedPropsUsed.map(function (supportedProp) {
      var attribute = _utilsHTML42['default'].supportedPropsToTransformableAttributes[supportedProp];

      return {
        name: 'data-oy-' + attribute,
        value: props[supportedProp]
      };
    }).reduce(function (intermediate, nextTransformableProp) {
      intermediate[nextTransformableProp.name] = nextTransformableProp.value;
      return intermediate;
    }, {});

    // Overwrite HTML4 props with null.
    var nullifiedProps = supportedPropsUsed.reduce(function (intermediate, supportedProp) {
      intermediate[supportedProp] = null;
      return intermediate;
    }, {});

    return (0, _objectAssign2['default'])({}, props, nullifiedProps, transformableProps);
  }
};
module.exports = exports['default'];