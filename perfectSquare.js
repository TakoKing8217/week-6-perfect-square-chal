const perfectSquare = (num) => {
  for (let i = 0; i ** 2 <= num; i++) {
    if (i * i === num) {
      i++;
      return i ** 2;
    }
  }
  return -1;
};


console.log(perfectSquare(9), "should be 16");
console.log(perfectSquare(289), "should be 324");
console.log(perfectSquare(3000), "should be -1");
console.log(perfectSquare(25), "should be 36");
console.log(perfectSquare(64), "should be 81");
console.log(perfectSquare(100), "should be 121");
console.log(perfectSquare(101), "should be -1");
