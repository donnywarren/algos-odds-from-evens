//ODDS FROM EVENS
const oddsFromEvens = arr => {
  let odd = [];
  let even = [];
  let returnArr = [];
  let sortArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortArr.length; i++)
    if (sortArr[i] % 2 === 0) {
      even.push(sortArr[i]);
    } else {
      odd.push(sortArr[i]);
    }
  let oddReverse = odd.reverse();
  returnArr = even.concat(oddReverse);
  return returnArr;
};
// console.log(oddsFromEvens([423, 322, 918, 45, 6, 79, 55]));
module.exports = {
  oddsFromEvens
};
