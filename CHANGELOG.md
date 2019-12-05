## 0.11.2 (November 5, 2019)

- Update OyElementAttributes TS type to match React type (swac).

## 0.11.1 (November 2, 2018)

- Fix types to be compatible with @types/react@16.4.18 (aldendaniels).

## 0.11.0 (December 16, 2017)

- Add TypeScript typings (@sampsonjoliver).
- Support for rendering in the browser (@ccorcos).

## 0.10.0 (October 15, 2017)

- Bump React version to 16.
- On validated components, `vAlign` is now `valign` and `bgColor` is now `bgcolor`.
- Remove `Element` component, since React 16 makes it now a no-op.

## 0.9.0 (June 15, 2017)

- Add `bgColor` option to default template (@hlynurf).
- Fix prop-types deprecation (@Rauttis).
- Update clean-css to 4.x (@weaintplastic).

## 0.8.0 (January 19, 2017)

- Bump React version to 15.4.0.
- Deprecate the unsafe bodyContent option in `Oy.renderTemplate`.
- Expose rules on `Oy.PropTypes.*`, for use in custom component propType validation (@rendez).
- New default rule on Table and TD: BackgroundAbsoluteURLRule (@rendez).

## 0.7.0 (July 14, 2016)

- Bump React version to 15.1.0.

## 0.6.1 (March 28, 2016)

- Fix regression with `headCSS` option where it didn't appear in outputted template.

## 0.6.0 (March 16, 2016)

- Migrate towards new API that consumes the top-level component directly.
- Basic CSS security validation and minification for headCSS.
- Adds better test coverage.
- Add ESLint 2.0.

## 0.5.1, 0.5.2, 0.5.3 (March 15, 2016)

- Fix babel-react preset bug
- Fix 0.5.1 bug in examples directory
- Fix bug with Babel ES6 module exports change
- Update to Babel 6

## 0.5.0 (March 9, 2016)

- Added `dir` and `lang` options to `Oy.renderTemplate` to support i18n.

## 0.4.0 (February 16, 2016)

- Expose `Table`, `TBody`, `TR`, `TD`, `Img`, and `A` components with default `propType` validations.
- Remove Oy.Element `type` prop. Use `tagName` instead.
- Updated Hello World example.

## 0.3.0 (February 4, 2016)

- Deprecation warning added for Oy.Element `type` prop. Use `tagName` instead.
- Added warning for Oy.renderTemplate outputs larger than 100KB. See #24
- Opened up Oy-supported attributes to all Oy.Element components.
- New rules:
  - EmptyTDRule
  - ShorthandFontRule

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
