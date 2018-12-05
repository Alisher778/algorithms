function birthdayCakeCandles(arr) {
    // 1) store each number into object and number of the sam numbers
    let arrList = {};// {'1': 2, '2': 1, '3':2};
    arr.forEach(num => {
        if(arrList[num]) {
          return arrList[num]++;
        } else {
            arrList[num] = 1;
        }
    });
    // 2) store the number fields from arrList into arr
    let numArr = []; // [2,3,4,1];
    for(let x in arrList) {
       numArr.push(parseInt(x));
    }
   // 3) get Max number from numArr and print the result from arrList
    const numOfCandels = Math.max.apply(null, numArr);
    console.log(arrList[numOfCandels]);

}

birthdayCakeCandles([3,3,4,1]);