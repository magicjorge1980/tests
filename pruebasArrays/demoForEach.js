delete Array.prototype.forEach;
Array.prototype.forEach = function forEach(array, callback) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    callback(element);
  }
};

var animals = ["perro", "gato", "conejo"];

animals.forEach(animals, function (animal) {
  console.log(animal);
});
