module.exports = {
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    testPathIgnorePatterns: [
        '/node_modules/',
    ],
    roots: ['src/'],
    testRegex: '(/__tests__/.*\\.test)\\.js$',
};
