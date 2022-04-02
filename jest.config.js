/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  testMatch: [
    '<rootDir>/src/**/*.spec.ts',
    '<rootDir>/src/**/*.spec.js',
    '<rootDir>/src/**/*.spec.tsx',
    '<rootDir>/src/**/*.spec.jsx',
    '<rootDir>/src/**/*.test.ts',
    '<rootDir>/src/**/*.test.js',
    '<rootDir>/src/**/*.test.tsx',
    '<rootDir>/src/**/*.test.jsx',
  ],
};
