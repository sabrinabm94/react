module.exports = {
    notify: false,
    clearMocks: true,
    restoreMocks: true,
    collectCoverage: true,
    coverageReporters: ["lcov", "text"],
    moduleNameMapper: {
        "^.+\\.(css|less|scss|svg|png)$": "babel-jest",
    },
    moduleDirectories: ["node_modules", "<rootDir>/node_modules", "."],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    preset: "ts-jest",
    collectCoverageFrom: [
        "<rootDir>/components/*.js",
        "<rootDir>/pages/*.js",
        "<rootDir>/templates/*.js",
    ],
    transform: {
        "^.+\\.(ts|tsx)?$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest",
    },
};
