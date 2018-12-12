function rotLeft(a, d) {
    var arr = a;
    for (var j = 1; j <= d; j++) {
        arr.shift(arr.push(arr[0]));
    }
    console.log(arr);

}

rotLeft([5, 1, 2, 3, 4], 1);