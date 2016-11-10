/*
  Let's make a function called compose that accepts a value as a parameter, as well as any number of functions as additional parameters.

  The function will return the value that results from the first parameter being used as a parameter for all of the accepted function parameters in turn. So:

  var doubleTheValue = function(val) { return val * 2; }
  var addOneToTheValue = function(val) { return val + 1; }

  compose(5, doubleTheValue) // should === 10
  compose(5, doubleTheValue, addOneToTheValue) // should === 11

  If only a single parameter is passed in, return that parameter.

  ----------------------------------------------------------------------------
                              Other Solutions:
  ----------------------------------------------------------------------------

  const compose = (x, ...fs) => fs.reduce((a, f) => f(a), x);


  var compose = function(input) {
    return [].slice.call(arguments, 1)
      .reduce(function (acc, fn) {
        return fn(acc);
      }, input);
  }
 */

function compose() {
  const args = [...arguments];
  if (args.length === 1) return args[0];
  return args.slice(1).reduce((v, fn) => fn(v), args[0]);
}

export default compose;
