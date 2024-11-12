const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1-num2);
};

const sum = function(nums) {
	return nums.reduce((sum, current) => sum + current, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, current) => product * current, 1);
};

const power = function(num1, power) {
	return (num1 ** power)
};

const factorial = function(num1) {
  let result = 1;
	for (let number = num1; number > 1; number--){
    result *= number;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
