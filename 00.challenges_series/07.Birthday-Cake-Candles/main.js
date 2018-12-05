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

function birthdayCakeCandles2(arr) {
    let maxNum = arr.sort((a, b) => a - b)[arr.length - 1];
    let numOfCandels = 0;
    arr.forEach(num => {
        if(maxNum == num) numOfCandels++;
    });
   
    console.log(numOfCandels);

}

function birthdayCakeCandles3(arr) {
    let maxNum = Math.max.apply(null, arr);
    let numOfCandels = 0;
    arr.forEach(num => {
        if(maxNum == num) numOfCandels++;
    });
   
    console.log(numOfCandels);

}


birthdayCakeCandles([3,3,4,4,4,1]);
birthdayCakeCandles2([3,3,4,4,4,1]);
birthdayCakeCandles3([3,3,4,4,4,1]);