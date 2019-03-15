module.exports = {
  transform: {
    '^.+\\.js(x)?$': 'babel-jest',
    '.+\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
  setupFilesAfterEnv: ["<rootDir>tools/setupJest.js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg)$": "<rootDir>tools/__mocks__/fileMock.js",
    "^Components(.*)$": "<rootDir>/src/js/components$1",
    "^Utils(.*)$": "<rootDir>/src/js/utils$1",
    "^Actions(.*)$": "<rootDir>/src/js/actions$1"
  }
}
