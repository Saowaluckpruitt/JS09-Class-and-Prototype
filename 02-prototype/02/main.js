Function.prototype.defer = function (delay) {
  return setTimeout(this, delay);
};
function f() {
  alert("Hello!");
}
f.defer(1000);
