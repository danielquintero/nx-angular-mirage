module.exports = {
  name: 'mirage-cypress-example',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mirage-cypress-example',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
