delete Array.prototype.pop;
Array.prototype.pop = function pop(array) {
  var popped = this[this.length - 1];
  this.length = this.length - 1;
  return popped;
};

var numbers = [1, 2, 3, 4, 5];

console.log(numbers.pop(numbers));
console.log(numbers);
