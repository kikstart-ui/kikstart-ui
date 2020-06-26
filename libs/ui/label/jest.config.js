module.exports = {
  name: 'ui-label',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/label',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
