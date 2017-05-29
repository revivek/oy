import CleanCSS from 'clean-css';


export default {
  // Validate against common CSS vulnerabilities.
  raiseOnUnsafeCSS: (css = '', foundInName = '\'not provided\'') => {
    css = new CleanCSS({
      shorthandCompacting: false
    }).minify(css).styles;
    if (css.match(/-moz-binding/i)) {
      throw new Error(`Unsafe CSS found in ${foundInName}: "-moz-binding"`);
    } else if (css.match(/expression/i)) {
      throw new Error(`Unsafe CSS found in ${foundInName}: "expression"`);
    }
    return css;
  }
};
