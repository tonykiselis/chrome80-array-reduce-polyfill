function reducePolyfill() {
    const arrayReduce = Array.prototype.reduce;
    let callback;
    Object.defineProperty(Array.prototype, 'reduce', {
        value: function (passedCallback, ...args) {
            callback = passedCallback;
            return arrayReduce.call(this, callback, ...args);
        },
    });
}

export default reducePolyfill;
