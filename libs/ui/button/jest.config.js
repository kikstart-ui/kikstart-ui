module.exports = {
  name: 'ui-button',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/button',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
