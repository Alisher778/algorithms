function sockMerchant(n, arr) {
   let arrOfSocks = {};
    for (let i = 0; i < n; i++) {
        if (arrOfSocks[arr[i]]) {
            arrOfSocks[arr[i]]++;
        } else {
            arrOfSocks[arr[i]] = 1
        }
    }
    
   let result = 0;
    for(let x in arrOfSocks) {
        if(arrOfSocks[x] % 2 == 0) {
            result += arrOfSocks[x] / 2;
        } else {
            if((arrOfSocks[x] - 1) > 1 && (arrOfSocks[x] - 1) / 2 > 0) {
                result += (arrOfSocks[x] - 1) / 2;
            }
        }
    }
    
    return result;

}

sockMerchant(12, [10, 20, 20, 10, 10, 30, 30, 50, 10, 50, 10, 20]);