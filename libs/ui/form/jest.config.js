module.exports = {
  name: 'ui-form',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/form',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
}
