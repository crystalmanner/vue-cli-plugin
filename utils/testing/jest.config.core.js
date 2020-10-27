module.exports = {
  collectCoverage: true,
  modulePaths: ['node_modules'],
  collectCoverageFrom: [
    '!resources/js/bootstrap.js',
    '!resources/js/main.js',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/*.stories.js',
    '!**/stories.js'
  ],
  coverageDirectory: '<rootDir>/tests/.reports/javascript-coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/vendor/'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90
    }
  },
  setupFiles: [
    '<rootDir>/tests/Javascript/setup.js',
    '<rootDir>/tests/Javascript/mockDate.js'
  ],
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  moduleDirectories: [
    'node_modules',
    'vendor'
  ],
  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/resources/js/$1',
    '^fresh-bus/tests/(.*)$': '<rootDir>/vendor/freshinup/fresh-bus-forms/tests/Javascript/$1',
    '^fresh-bus/(.*)$': '<rootDir>/vendor/freshinup/fresh-bus-forms/resources/assets/js/$1',
    '^fresh-bus$': '<rootDir>/vendor/freshinup/fresh-bus-forms/resources/assets/js/index.js',
    '^@freshinup/core-ui/(.*)$': '<rootDir>/node_modules/@freshinup/core-ui/$1',
    '^tests/(.*)$': '<rootDir>/tests/Javascript/$1',
    '^vue$': '<rootDir>/node_modules/vue/dist/vue.min.js',
    '^axios$': '<rootDir>/node_modules/axios/index.js',
    '^vuex$': '<rootDir>/node_modules/vuex/dist/vuex.common.js',
    '@freshinup/(.*)$': '<rootDir>/node_modules/@freshinup/$1',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!(@storybook/.*\\.vue$|vue-cli-plugin-freshinup/.*\\.js$|@freshinup/core-ui/.*\\.vue$|@freshinup/core-ui/.*\\.js$))'
  ],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/vendor/'
  ]
}
