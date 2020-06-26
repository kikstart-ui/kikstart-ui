module.exports = {
  name: 'layout-console',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/layout/console',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
