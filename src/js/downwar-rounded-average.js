/*
TODO: calculate the downward rounded average of the marks array
 */
function getAverage(marks) {
  let acc = 0;
  //   marks.forEach(element => (acc += element));
  for (let i = 0; i < marks.length; i++) {
    acc += marks[i];
  }
  return Math.floor(acc / marks.length);
  //   return Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length);
}
console.log(getAverage([2, 2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
