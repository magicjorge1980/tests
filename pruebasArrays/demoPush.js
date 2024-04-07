//demo .push
delete Array.prototype.push;
Array.prototype.push = function push(array) {
  for (var i = 0; i < arguments.length; i++) {
    argument = arguments[i];
    this[this.length] = argument;
  }
  return this.length;
};

var numbers = [1, 2, 3];
var count = numbers.push(8);

console.log(count);
console.log(numbers);
