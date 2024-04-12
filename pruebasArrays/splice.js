function splice(array, start, deleteCount) {
  var removed = [];
  var items = [];
  for (var i = 3; i < arguments.length; i++) {
    items[items.length] = arguments[i];
  }

  if (deleteCount === 0) {
    for (var j = array.length - 1; j >= start; j--) {
      array[j + items.length] = array[j];
    }

    for (var k = start, h = 0; k < start + items.length; k++, h++) {
      array[k] = items[h];
    }
  } else if (deleteCount > 0) {
    for (var i = start - 1; i <= array.length - start + deleteCount; i++) {
      removed[removed.length] = array[i];
      array[i] = items[i - start + 1];
    }
  }
  return removed;
}
console.info("CASE 1 deleteCount === 0:");

var numbers = [1, 2, 5, 6];
var result = splice(numbers, 2, 0, 3, 4);

var numbers = [1, 2, 3, 4, 7, 8, 9];
var result = splice(numbers, 4, 0, 5, 6);

console.assert(numbers.length === 9, "numbers.length is 9");
console.assert(numbers[0] === 1, "numbers[0] is 1");
console.assert(numbers[1] === 2, "numbers[1] is 2");
console.assert(numbers[2] === 3, "numbers[2] is 3");
console.assert(numbers[3] === 4, "numbers[3] is 4");
console.assert(numbers[4] === 5, "numbers[4] is 5");
console.assert(numbers[5] === 6, "numbers[5] is 6");

console.info("CASE 2 deleteCount > 0:");

var numbers = [1, 2, 3, 7, 8, 6];
var result = splice(numbers, 4, 2, 4, 5);

console.assert(result.length === 2, "result.length is 2");
console.assert(result[0] === 7, "result[0] is 7");
console.assert(result[1] === 8, "result[1] is 8");
console.assert(numbers.length === 6, "numbers.length is 6");
console.assert(numbers[0] === 1, "numbers[0] is 1");
console.assert(numbers[1] === 2, "numbers[1] is 2");
console.assert(numbers[2] === 3, "numbers[2] is 3");
console.assert(numbers[3] === 4, "numbers[3] is 4");
console.assert(numbers[4] === 5, "numbers[4] is 5");
console.assert(numbers[5] === 6, "numbers[5] is 6");
