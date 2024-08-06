// Сделать, чтобы console.log(A === B) вывел true.

function myFunction() {}

var A = myFunction();
var B = new myFunction();

A = B;
console.log(A === B);

// Сложная задача оказалась :)
