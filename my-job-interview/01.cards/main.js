const example = ["2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD"];

function cards(arr) {
    const newArr = [].concat(arr);
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, "T","J","Q","K","A"];
    const suits = ["S", "C", "H", "D"];
    let result = {times: 0, counter: 0};

    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<ranks.length; j++) {
            for(let k=0; k<suits.length; k++) {
                const check = ranks[j] + suits[k];
                
                if(arr.indexOf(check) != -1) {
                    result.counter++;
                    // newArr[newArr.indexOf(check)] = 0;
                    arr[arr.indexOf(check)] = 0;
                } 
                if(result.counter == 52) {
                    result.counter = 0;
                    result.times++;
                }
            }
        }
    }
    console.log(result);
}

cards(example);