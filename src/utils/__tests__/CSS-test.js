import CSS from '../CSS';


describe('CSS', function() {
  it('should throw on unsafe css', function() {
    const shouldThrowBecauseOfMozBinding = () => {
      CSS.raiseOnUnsafeCSS(
        'body{-moz-binding: url("http://www.website.com/xss.xml#test")}'
      );
    };
    const shouldThrowBecauseOfExpression = () => {
      CSS.raiseOnUnsafeCSS(
        'body{xss:expr/*XSS*/ession(alert("XSS"))}'
      );
    };

    expect(shouldThrowBecauseOfMozBinding).toThrow();
    expect(shouldThrowBecauseOfExpression).toThrow();
  });
});
