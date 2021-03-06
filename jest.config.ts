/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */

import { defaults } from 'ts-jest/presets';

module.exports = {
  preset: '@shelf/jest-mongodb',
  transform: defaults.transform,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '!mapbox-gl': '<rootDir>/client/__mocks__/mapbox-gl.js',
  },
  moduleDirectories: ["node_modules", "client/src"],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/client/src/actions/',
    '<rootDir>/client/src/reducers/',
    '<rootDir>/client/node_modules/',
  ]
};
