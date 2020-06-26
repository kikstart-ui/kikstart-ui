module.exports = {
  name: 'ui-no-data',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/no-data',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
