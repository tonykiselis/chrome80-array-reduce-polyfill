import reducePolyfill from '../reducePolyfill';

describe('reduce works', () => {
    reducePolyfill();
    test('calls provided function correct number of times', () => {
        const mockFunction = jest.fn();
        const array = [1, 2, 3, 4, 5, 6];
        array.reduce(mockFunction, 0);
        expect(mockFunction).toHaveBeenCalledTimes(array.length);
    });

    test('reduces value', () => {
        const array = [
            {
                hash: 'hash1',
                username: 'Aristotle',
            },
            {
                hash: 'hash2',
                username: 'Plato',
            },
            {
                hash: 'hash3',
                username: 'Democritus',
            },
            {
                hash: 'hash4',
                username: 'Socrates',
            },
            {
                hash: 'hash5',
                username: 'Xenon',
            },
            {
                hash: 'hash6',
                username: 'Diogenes',
            },
        ];
        const reducedArray = array.reduce((accumulator, user) => {
            accumulator[user.hash] = user;
            return accumulator;
        }, {});

        array.forEach((user) => {
            expect(user).toBe(reducedArray[user.hash]);
        })
    });
});
