Object.defineProperty(Array.prototype, "groupBy", {
	value: function (compare) {
		function defaultGrouping(array, callback) {
			return array.reduce((obj, value) => {
				const key = callback ? callback(value) : value; // Используем callback, если он есть
				if (!obj[key]) {
					obj[key] = [];
				}
				obj[key].push(value);
				return obj;
			}, {});
		}
		//
		if (compare !== undefined) {
			// console.log(1);
			return defaultGrouping(this, compare);
		} else {
			return defaultGrouping(this);
		}
	},
});

console.log([1, 2, 3, 2, 4, 1, 5, 1, 6].groupBy());
console.log(
	[1, 2, 3, 2, 4, 1, 5, 1, 6].groupBy(function (val) {
		return val % 3;
	}),
);

// Пример:
// [1,2,3,2,4,1,5,1,6].groupBy()
// {
//   1: [1, 1, 1],
//   2: [2, 2],
//   3: [3],
//   4: [4],
//   5: [5],
//   6: [6]
// }

// [1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} )
// {
//   0: [3, 6],
//   1: [1, 4, 1, 1],
//   2: [2, 2, 5]
// }
