function miniMaxSum(arr) {
    let result = [];
    for (var i = 0; i < arr.length; i++) { 
        let subResult = 0;
        for (let j = 0; j < arr.length; j++) {
            if (j != i) subResult += arr[j];
        } 
        result.push(subResult);
    }
    const minNum = Math.min.apply(null, result);
    const maxNum = Math.max.apply(null, result);
    console.log(minNum, maxNum);

}

miniMaxSum([1,2,3,4,5]);