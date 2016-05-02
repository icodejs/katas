/*
  Write a function defaultArguments. It takes a function as an argument, along with an object containing default values for that function's arguments, and returns another function which defaults to the right values.

  You cannot assume that the function's arguments have any particular names.

  You should be able to call defaultArguments repeatedly to change the defaults.

  function add(a,b) { return a+b;};

  var add_ = defaultArguments(add,{b:9});
  add_(10); // returns 19
  add_(10,7); // returns 17
  add_(); // returns NaN

  add_ = defaultArguments(add_,{b:3, a:2});
  add_(10); // returns 13 now
  add_(); // returns 5

  add_ = defaultArguments(add_,{c:3}); // doesn't do anything, since c isn't an argument
  add_(10); // returns NaN
  add_(10,10); // returns 20

  HINT: This problem requires using Fuction.prototype.toString() in order to extract a function's argument list

  Solutions:

  Function.prototype.getParamNames = function () {
    var fnStr = this.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
    return fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(/([^\s,]+)/g) || [];
  }

  function defaultArguments(func, params) {
    if (!params) return func;
    var paramNames = func.getParamNames();
    var f = function () {
      var args = [].slice.call(arguments);
      return func.apply(null,args.concat(paramNames.map(function(p) {return params[p];}).slice(args.length)));
    };
    f.getParamNames = function () { return paramNames; };
    return f;
  }

  function defaultArguments(func, params) {
    var names = func.names || func.toString()
      .replace(/\/\/.*$|\/\*.*?\*\/|\s/gm, '')
      .match(/(?:[\w]+(?:,[\w]+)*)?(?=\))/m)[0].split(',');

    var detour = function () {
      var input = arguments;
      return func.apply(this, names.map(function (val, i) {
        return i < input.length ? input[i] : params[names[i]];
      }));
    };

    detour.names = names;
    return detour;
  }
 */

function defaultArguments(fn, params) {
  const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
  const ARGUMENT_NAMES = /([^\s,]+)/g;
  const fnStr = (fn.fn ? fn.fn.toString() : fn.toString()).replace(STRIP_COMMENTS, '');
  const start = fnStr.indexOf('(') + 1;
  const end = fnStr.indexOf(')');
  const argNames = fnStr.slice(start, end).match(ARGUMENT_NAMES) || [];

  function newFn(...args) {
    const paramArgs = argNames.map(v => params[v]).slice(args.length);
    return fn.apply(null, args.concat(paramArgs));
  }

  newFn.fn = fn;

  return newFn;
}

export default defaultArguments;
