import isAffectedUserAgent from '../isAffectedUserAgent';

describe('Finds out affected user agent', () => {
    test.each([
        [
            'random gibberish string',
            false,
        ],
        [
            'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:73.0) Gecko/20100101 Firefox/73.0 breadcrumbs.js:65:50',
            false,
        ],
        [
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36',
            true,
        ],
        [
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36',
            false,
        ],
    ])('with %s userAgent', (agent, expected) => {
        expect(isAffectedUserAgent(agent)).toBe(expected);
    })
});
