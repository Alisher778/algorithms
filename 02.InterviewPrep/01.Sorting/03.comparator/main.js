function com(arr) {
    for(var i=0; i<arr.length; i++) {
        for(var j=0; j<arr.length - i - 1; j++) {
            if(arr[j][1] > arr[j+1][1]) {
                var currentValue = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = currentValue;
            } else if(arr[j][1] == arr[j+1][1]) {
                var currentValue = [arr[j], arr[j+1]].sort();
                arr[j] = currentValue[0];
                arr[j+1] = currentValue[1];
            }
        }
    }
    console.log(arr);
}

com([['Ali', 50], ['Vali', 80],['Abe', 50], ['Mali', 30]]);