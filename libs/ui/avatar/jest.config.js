module.exports = {
  name: 'ui-avatar',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/avatar',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
