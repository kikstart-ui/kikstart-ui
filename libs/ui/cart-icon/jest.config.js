module.exports = {
  name: 'ui-cart-icon',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/cart-icon',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
