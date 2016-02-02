## 0.3.0 (February 3, 2016)

- Deprecation warning added for Oy.Element `type` prop. Use `tagName` instead.
- Added warning for Oy.renderTemplate outputs larger than 100KB.
- Opened up Oy-supported attributes to all Oy.Element components.

## 0.2.3 (February 1, 2016)

- Fix regression of `type` attribute propagating to Oy.Element elements.
- Namespace `data-*` attributes to decrease likelihood of attribute collisions.
- Add tests to components.

## 0.2.2 (January 26, 2016)

- NPM publishing of version 0.2.1
- Refactor to use `is` attribute to remove `data-*` find-and-replace.

## 0.2.1 (January 26, 2016)

- Bump React version to 0.14.6.
- Fix issue #19 regarding deleting `type` prop.

## 0.2.0 (December 15, 2015)

- Add HelloWorld example
- New rule:
  - ImgDimensionsRule

## 0.1.0 (September 10, 2015)

- Allow custom template generators
- More rules:
  - HrefAbsoluteURLRule
  - SrcAbsoluteURLRule

## 0.0.1 (July 24, 2015)

- Initial public release
- First few rules:
  - SixCharacterHexBackgroundColorRule
  - TableBorderRule
  - TableCellPaddingRule
  - TableCellSpacingRule
