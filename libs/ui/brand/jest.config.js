module.exports = {
  name: 'ui-brand',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/brand',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
