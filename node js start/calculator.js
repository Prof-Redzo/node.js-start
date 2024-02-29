
export const sum = (num1, num2) => {
   const result = num1 + num2;

   return result;
}

export const substract = (num1, num2) => {
  return num1 - num2;
}

export const multiply = (num1, num2) => {
  return num1 * num2;
};

export const divide = (num1, num2) => {
  if (num2 === 0) {
    return "Division with 0 is not possible";
  }

  return num1 / num2;
};

export const power = (base, exponent) => {
  return Math.pow(base, exponent);
}
//ES5 WAY
//module.exports = { sum, substract, multiply, divide, power };