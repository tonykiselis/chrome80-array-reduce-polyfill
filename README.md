Attempts to fix a known bug present in Chrome 80 which affects `Array.prototype.reduce`

https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

### Install:
```
npm i chrome80-array-reduce-polyfill
```

### Usage:

Import at entry point:
```javascript
import 'chrome80-array-reduce-polyfill';

// ..code
```

### How it works:

Currently it uses `global.navigator.userAgent` to detect specifically Chrome 80.
This bug may also effect other chromium based browsers, although it's not clear.
The code used in the polyfill is one which was reported to fix the issue for some users by wrapping the reduce call in additional function.

### Development:

- Build dist `npm run build`
- Run test suite `npm run test`
