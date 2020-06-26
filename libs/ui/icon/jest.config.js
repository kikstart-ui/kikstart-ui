module.exports = {
  name: 'ui-icon',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/icon',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
