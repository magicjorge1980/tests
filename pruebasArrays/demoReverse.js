delete Array.prototype.reverse;
Array.prototype.reverse = function reverse(array) {
  var result = [];
  for (var i = this.length - 1; i >= 0; i--) {
    result[result.length] = this[i];
  }
  return result;
};

var animals = ["dog", "cat", "bird", "fish"];
console.log(animals.reverse());
console.log(animals);