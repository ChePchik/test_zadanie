// а) получить во втором then значение b;

// б) сделать так, чтобы console.log(а) всегда чётко выполнялся после a.

// а и б задание
let a = new Promise((resolve, reject) => {
	let b = 0;
	resolve(b);
})
	.then((arg1) => {
		// console.log(1, arg1);
		return arg1;
	})
	.then((arg2) => {
		console.log(2, arg2);
	})
	.catch(() => {
		console.log(3);
	});

console.log(a);
