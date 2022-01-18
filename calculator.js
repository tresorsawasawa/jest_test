class  Calculator { 
  add = (x,y) => x + y;
  subtract = (x,y) => x - y;
  multiply = (x,y) => x * y;
  divide = (x,y) => {
    if (y === 0)
      throw new Error("It can't be divided by zero");
    return x / y;
  };
}

module.exports = Calculator;