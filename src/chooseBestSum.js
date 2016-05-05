/*
  John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns. Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible - to please Mary - but less than t - to please John- ?

  Example: With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

  The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

  The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

  The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or null integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit, if that sum exists, or otherwise nil, null, None, Nothing depending on the language.

  Examples:

  ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

  xs = [50] choose_best_sum(163, 3, xs) -> nil

  ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

  Solutions:

  function chooseBestSum(t, k, ts) {
      var sum = [];
      select(t,k,ts,[],0);
      function select(t,k,ts,cap,x){
          if(cap.length === k){
              sum.push(cap);
          } else {
              for(let i=x; i<ts.length; i++){
                  select(t,k,ts,cap.concat(ts[i]),i+1);
              }
          }
      }
      return sum.map(function(cv){return cv.reduce((to,c)=>to+c)}).sort((x,y)=>x-y)
                .filter(cc=>cc<=t).pop()||null;b

  function chooseBestSum(t, k, ls) {
    var distance=[]
    var closest = 0
    for(let city = 0; city < ls.length; city++){
      distance[city] = [[ls[city]]]
      for(var trip = 1; trip < k && trip <= city; trip++){
        distance[city][trip] = distance.slice(0, city).reduce((p, c) => (
          c.length > trip-1 ? [...p, ...c[trip-1].map(d => d+ls[city])] : p
        ),[])
      }
      if(distance[city].length >= k){
        if(distance[city][k-1].some(c => {
          closest = c <= t ? Math.max(closest,c) : closest
          return closest===t
        })) return t
      }
    }
    return closest || null
  }
 */

function permutations(arr, size) {
  let combs = [];
  let head;
  let tailcombs;

  if (size > arr.length || size <= 0) return [];
  if (size === arr.length) return [arr];
  if (size === 1) {
    for (let i = 0; i < arr.length; i++) {
      combs.push([arr[i]]);
    }
    return combs;
  }

  for (let i = 0; i < arr.length - size + 1; i++) {
    head = arr.slice(i, i + 1);
    tailcombs = permutations(arr.slice(i + 1), size - 1);

    for (let j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}

function chooseBestSum(t, k, ls) {
  if (k > ls.length) return null;
  const perms = permutations(ls, k);

  return perms.map(perm => perm.reduce((a, b) => a + b)).reduce((a, b, i, arr) => {
    const end = i === arr.length - 1;
    const [ y, z ] = [ t - Math.abs(a), t - Math.abs(b) ];
    const distA = y < 0 ? null : y;
    const distB = z < 0 ? null : z;

    if (end && (distA === null && distB === null)) return null;
    if (distA === null) return b;
    if (distB === null) return a;
    if (distA < distB) return a;
    return b;
  });
}

export default chooseBestSum;
