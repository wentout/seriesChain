# seriesChain
JavaScript series chaining with args passthrough

```javascript
const test = function (cb) {
	console.log(0);
	cb && cb(11);
};
const test1 = function (arg, cb) {
	console.log('1 >>', arg);
	cb && cb(22, 44);
};
const test2 = function (arg, arg2, cb) {
	console.log('2 >>', arg, arg2);
	cb && cb(33, 34);
};
const test3 = function (arg, arg2, cb) {
	console.log('3 >>', arg, arg2);
	// cb && cb(33, 34);
};

test.seriesChain()()()(test1)(test2)(test2)(test2)(test3);
```
