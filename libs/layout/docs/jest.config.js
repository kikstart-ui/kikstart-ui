module.exports = {
  name: 'layout-docs',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/layout/docs',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
