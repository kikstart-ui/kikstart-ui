module.exports = {
  name: 'ui-code',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/code',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
