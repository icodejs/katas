String.prototype.map = function (fn, thisArg) {
  return this.split('').map(fn, thisArg).join('');
}

String.prototype.join = function (separator = '') {
  return this.split('').join(separator);
}

String.prototype.reverse = function () {
  return this.split('').reverse().join('');
}

String.prototype.filter = function (fn, thisArg) {
  return this.split('').filter(fn, thisArg).join('');
}

String.prototype.forEach = function (fn, thisArg) {
  this.split('').forEach(fn, thisArg);
}

String.prototype.some = function (fn, thisArg) {
  return this.split('').some(fn, thisArg);
}

String.prototype.every = function (fn, thisArg) {
  return this.split('').every(fn, thisArg);
}

String.prototype.reduce = function (fn, initialValue) {
  return this.split('').reduce(fn, initialValue);
}

String.prototype.reduceRight = function () {

}

String.prototype.sort = function (fn, thisArg) {
  return this.split('').sort(fn).join('');
}

String.prototype.push = function () {

}

String.prototype.pop = function () {

}

String.prototype.shift = function () {

}

String.prototype.unshift = function () {

}

String.prototype.splice = function () {

}
