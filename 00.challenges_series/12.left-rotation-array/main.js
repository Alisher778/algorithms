function leftArray(arr, d) {
    var result = [].concat(arr);
    for(var i=0; i<=d; i++) {
        var data = result.shift();
        result.push(data);
    }
    console.log(result);
}

leftArray([1,2,3,4,5], 5);