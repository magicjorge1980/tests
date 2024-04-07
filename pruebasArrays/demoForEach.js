delete Array.prototype.forEach;
Array.prototype.forEach = function forEach(array, callback) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    callback(element);
  }
};

var animals = ["perro", "gato", "conejo"];

animals.forEach(animals, function (animal) {
  title = document.createElement("h4");
  title.style.color = "red";
  document.body.appendChild(title);
  title.textContent = animal.toUpperCase();

  console.log(animal);
});
