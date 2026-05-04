/* 
TODO: find the smallest integer in the array
*/
function findSmallestInteger(args) {
  let currentMin = args[0];
  for (let i = 1; i < args.length; i++) {
    if (args[i] < currentMin) currentMin = args[i];
  }
  return currentMin;
}
console.log(findSmallestInteger([1, 5, -548, 0, 1111, -3]));
