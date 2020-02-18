function isAffectedUserAgent(userAgent) {
    if (/Chrome\/80\.0\./.test(userAgent)) {
        const regexp = /Chrome\/80\.0\.(\d+\.\d+)/g;
        const matches = regexp.exec(userAgent);
        if (matches[1] && parseFloat(matches[1]) < 3987.106) {
            return true;
        }
    }

    return false;
}

export default isAffectedUserAgent;
