module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.(spec|test).{ts,tsx,js,jsx}'],
  setupFiles: ['<rootDir>/build/jest/enzyme.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],
}
