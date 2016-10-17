Function.prototype.seriesChain = function (cb) {
	const castor = this;
	const callbacks = [castor];
	let currentArgs = null;
	const addition = function (cb) {
		if (typeof cb == 'function') {
			callbacks.unshift(cb);
			if (callbacks.length == 1) {
				z();
			}
		}
		return addition;
	};
	const z = function () {
		const currentArgs = Array.prototype.slice.call(arguments);
		const cb = callbacks.pop();
		if (typeof cb == 'function') {
			if (callbacks.length) {
				currentArgs.push(z);
			}
			cb.apply(null, currentArgs);
		}
	};
	if (typeof cb == 'function') {
		addition(cb);
	}
	setTimeout(z, 0);
	// z(); // not implemented yet
	return addition;
};
