module.exports = {
  name: 'layout-web',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/layout/web',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
