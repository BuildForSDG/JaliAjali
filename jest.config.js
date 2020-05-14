module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/*.js',
    '!src/**/*.spec.js',
    '!**/node_modules/**'
  ],
  coveragePathIgnorePatterns: [
    // '/node_modules/',
    // 'src/components/index.js',
    // 'src/plugins/index.js',
    // 'src/init.js'
  ]
};
