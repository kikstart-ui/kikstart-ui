module.exports = {
  name: 'ui-loading',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/loading',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
