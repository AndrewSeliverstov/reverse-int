module.exports = function reverse (n) {
    
  let digitsStr = n.toString();

  function reverseString(str) {
      str = str.replace(/[^0-9]/g, '');
      return str.split("").reverse().join("");
  }
  let reversedStr = reverseString(digitsStr);

  let reversedNum;
  reversedNum = Number(reversedStr);

  return reversedNum;
};
