function sparseArrays(str, query) {
    var res = {};
    for(var i=0; i<query.length; i++) {
        for(var j=0; j<str.length; j++) {
            if(res[query[i]] >= 0) {
                if(query[i] == str[j]) {
                    res[query[i]]++
                }
            } else {
                res[query[i]] = 0;
            }

            // if(query[i] == str[j]) {
            //     if(res[query[i]]) {
            //         res[query[i]]++
            //     } else {
            //         res[query[i]] = 1
            //     }
            // } else {
            //     res[query[i]] = 0;
            // }
        }
    }
    // for(var x in res) {
    //     console.log(res[x]);
    // }
    console.log(res)
}

sparseArrays(["abcde",
   "sdaklfj",
    "asdjf",
    "na",
    "basdn",
    "sdaklfj",
    "asdjf",
    "na",
    "asdjf",
    "na",
    "basdn",
    "sdaklfj",
    "asdjf"], ["abcde",
        "sdaklfj",
        "asdjf",
        "na",
        "basdn"]);