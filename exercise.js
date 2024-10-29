function divisorSum(num) {
  let sum = 0;
  for (let i = 1; i < num; i++)
    if (num % i === 0) {
      sum += i;
    }
  return sum;
}

const perfectNum = (start, end) => {
  let numArr = [];
  for (let num = start; num < end; num++) {
    if (divisorSum(num) === num) {
      numArr.push(num);
    }
  }
  return numArr;
};

const start = +prompt("Enter starting number");
const end = +prompt("Enter end number");

const perfectNumbers = perfectNum(start, end);
console.log(perfectNumbers);
