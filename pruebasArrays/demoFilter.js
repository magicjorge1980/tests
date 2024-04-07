delete Array.prototype.filter;
Array.prototype.filter = function filter(callback) {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result[result.length] = this[i];
    }
  }
  return result;
};

var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

var filtered = words.filter(function (word) {
  return word.length < 6;
});

console.log(filtered);
