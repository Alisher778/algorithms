function reverseArray(a) {
    let res = [];
    for (var i = 0; i < a.length; i++) {
        res.unshift(a[i])
    }
    return res;
}

reverseArray([2,1,4,5]);