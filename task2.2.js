// в) дополнить первый then, чтобы из него перешла ошибка "ошибка" в catch, а из catch перешла за Promise дальше, поймалась и вывелась каким нибудь образом в консоль.

// в
let a = new Promise((resolve, reject) => {
	let b = 0;
	resolve(b);
})
	.then((arg1) => {
		// console.log(1, arg1);
		// return arg1;
		throw new Error("Error");
	})
	.then((arg2) => {
		console.log(2, arg2);
	})
	.catch((e) => {
		console.log(e.message, "в catch");
		return e;
	});

console.log(a, "вне catch");
