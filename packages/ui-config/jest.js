const { resolve } = require('path');

module.exports = {
  setupFiles: [resolve(__dirname, 'enzyme.js')],
  moduleFileExtensions: ['jsx', 'js'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?)$',
  snapshotSerializers: ['enzyme-to-json/serializer']
};
