function sockMerchant(n, arr) {
    var arrOfSocks = {};
    for (let i = 0; i < n; i++) {
        if (arrOfSocks[arr[i]]) {
            arrOfSocks[arr[i]]++;
        } else {
            arrOfSocks[arr[i]] = 1
        }
    }
    console.log(arrOfSocks);

}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);