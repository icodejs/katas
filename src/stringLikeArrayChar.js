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

String.prototype.reduceRight = function (fn, initialValue) {
  return this.split('').reduceRight(fn, initialValue);
}

String.prototype.sort = function (fn) {
  return this.split('').sort(fn).join('');
}

String.prototype.push = function (element) {
  return [...this.split(''), element].join('');
}

String.prototype.pop = function () {
  const len = this.split('').length;
  const removeLast = (c, i) => i !== len - 1;
  return this.split('').filter(removeLast).join('');
}

String.prototype.shift = function () {
  const removeLast = (c, i) => i !== 0;
  return this.split('').filter(removeLast).join('');
}

String.prototype.unshift = function (element) {
  return [element, ...this.split('')].join('');
}

String.prototype.splice = function () {
  const [start, deleteCount, value] = [...arguments];
  return this.substring(0, start, deleteCount).join('') + value;
}
