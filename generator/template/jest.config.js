const JestConfig = require('vue-cli-plugin-freshinup/utils/testing/jest.config.core')

module.exports = {
  ...JestConfig,
  collectCoverageFrom: JestConfig.collectCoverageFrom.concat([
    'resources/js/**/*.{js,vue}'
  ]),
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90
    }
  },
  moduleNameMapper: {
    ...JestConfig.moduleNameMapper,
    '@/(.*)$': '<rootDir>/resources/js/$1'
  }
}
