module.exports = {
  name: 'ui-hero',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/hero',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
