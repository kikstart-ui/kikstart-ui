module.exports = {
  name: 'ui-link',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/link',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
