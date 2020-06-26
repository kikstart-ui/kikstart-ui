module.exports = {
  name: 'ui-timeago',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/timeago',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
