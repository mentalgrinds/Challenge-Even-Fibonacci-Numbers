exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;

  var elem = 0;
  var wrkArr = [0,0,0];

  while (elem <= n){

    if (elem === 0) {
      wrkArr[0] = 0;
      elem = 1;
    } else if (elem === 1) {
      wrkArr[1] = 1;
      elem =2;
    } else {
      wrkArr[2] = wrkArr[1] + wrkArr[0];    
      //Here we check if it is even and if so add to sum.
      if ((wrkArr[2] % 2) === 0) {
        sum += wrkArr[2];      
      }
      elem = wrkArr[2];
      //remove first element
      wrkArr.shift();
    }
  }
  return sum;
};