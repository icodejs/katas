/*
  Solution 1:
  var returns = ['join','forEach','some','every','reduce','reduceRight'];
  returns.forEach( function ( a ) {
    String.prototype[ a ] = function () {
      return Array.prototype[ a ].apply( this.split(''), arguments );
    };
  });

  var joins = ['map','filter','sort','reverse'];
  joins.forEach( function ( a ) {
    String.prototype[ a ] = function () {
      return Array.prototype[ a ].apply( this.split(''), arguments ).join('');
    };
  });

  var modifies = ['push','pop','shift','unshift','splice'];
  modifies.forEach( function ( a ) {
    String.prototype[ a ] = function () {
      var arr = this.split('');
      Array.prototype[ a ].apply( arr, arguments );
      return arr.join('');
    };
  });


  Solution 2:
  function addToPrototype(property) {
    String.prototype[property] = function link() {
      var arr = this.split('');
      var result = Array.prototype[property].apply(arr, arguments);

      if (arr.join('') !== this.toString()) {
        result = arr.join('');
      } else if (result instanceof Array) {
        result = result.join('');
      }

      return result;
    };
  }

  (function stringSuperPower() {
    var tester = Object('');

    Object.getOwnPropertyNames(Array.prototype).forEach(function(property) {
      if (!(property in tester)) {
        addToPrototype(property);
      }
    });
  }());
*/

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
  const arr = this.split('');
  const removeLast = (c, i) => i !== arr.length - 1;
  return arr.filter(removeLast).join('');
}

String.prototype.shift = function () {
  const removeFirst = (c, i) => i !== 0;
  return this.split('').filter(removeFirst).join('');
}

String.prototype.unshift = function (element) {
  return [element, ...this.split('')].join('');
}

String.prototype.splice = function () {
  const [start, deleteCount, value] = [...arguments];
  return this.substring(0, start, deleteCount) + value;
}
