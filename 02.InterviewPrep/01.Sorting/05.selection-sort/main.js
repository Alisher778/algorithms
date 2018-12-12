function selectionSort(arr) {
    let newArr = [].concat(arr);
    let result = [];

    for(let i=0;i<arr.length; i++) {
        const min = Math.min.apply(null, newArr);
        result.push(min);
        newArr.splice(newArr.indexOf(min),1);
    }

    console.log(result);

}

selectionSort([9,78,1,6,24]);