console.log('Bubble sort');

function bubbleSort(arr) {
    var myArr = [].concat(arr);
    for(var i=0; i<myArr.length; i++) {
        for(var j=0; j<myArr.length -1; j++) {
            if(myArr[j]>myArr[j+1]) {
                var currentValue = myArr[j];
                myArr[j] = myArr[j+1];
                myArr[j+1] = currentValue;
            }
        }
    }
    console.log(myArr);
}

bubbleSort([3,1,2,5,7,4]);