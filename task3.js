Object.defineProperty(Object.prototype, "delay", {
	value: function (compare) {
		// console.log(1);
		// console.log(compare);
		// console.log(this);
		if (compare !== undefined) {
			// console.log(2);
			setTimeout(() => this(), compare);
		}
		return [1];
	},
});

function fireAlert() {
	// alert("alert!");
	console.log("alert!");
	// для работы в node js
}

fireAlert.delay(1000); // реализовать наполнение метода, чтобы через 300мс вылетел "alert!"
