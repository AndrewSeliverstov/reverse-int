module.exports = function reverse (n) {
    
  var digits = [];
        
  var reversedNum = 0;
    
    while (n){
      digits.push(n % 10);
      n = Math.floor(n/10);     
    }
    
  let reversedStr = digits.join('');
  reversedNum = Number(reversedStr);
  return reversedNum;
};
