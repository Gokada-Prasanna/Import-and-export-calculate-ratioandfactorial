let factorialFunction = require("../factorial/index.js");

let ratioFunction = require("../ratio/index.js");

function ratioAndFactorial(num1, num2, num3) {
  let ratio = ratioFunction(num1, num2);
  let factorial = factorialFunction(num3);

  return { ratio, factorial };
}

module.exports = ratioAndFactorial;
