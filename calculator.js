function sum(a, b) {
  return a + b;
}

function printSum(a, b) {
  const result = sum(a, b);
  console.log(result);
  return result;
}

module.exports = sum;
module.exports.printSum = printSum;