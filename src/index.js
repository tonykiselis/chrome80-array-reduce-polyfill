import reducePolyfill from './reducePolyfill';
import isAffectedUserAgent from './isAffectedUserAgent';

if (isAffectedUserAgent(global.navigator.userAgent)) {
    reducePolyfill();
}
