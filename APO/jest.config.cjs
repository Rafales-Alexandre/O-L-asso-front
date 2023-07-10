module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/unit/**/*.spec.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
