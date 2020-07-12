module.exports = {
  name: 'shared-mirage',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/mirage',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
