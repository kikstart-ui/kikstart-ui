module.exports = {
  name: 'ui-markdown',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/markdown',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
