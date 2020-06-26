module.exports = {
  name: 'ui-list',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/list',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
