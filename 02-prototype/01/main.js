Array.prototype.sum = function () {
  return this.reduce((acc, el) => acc + el);
};

Array.prototype.max = function () {
  return this.sort((a, b) => b - a)[0];
};

const arr = [2, 3, 4, 6];
console.log(arr.sum());
console.log(arr.max());
