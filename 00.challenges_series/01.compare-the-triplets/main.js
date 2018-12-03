function compareTriplets(a, b) {
    const result = { alice: 0, bob: 0 };
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            result.alice++;
        } else if (a[i] == b[i]) { 
            continue;
        } else {
            result.bob++;
        }
    }
    const { alice, bob } = result;
    // return [alice, bob]
    return alice + ' : ' + bob
}

compareTriplets([1,2,3], [3,2,1]);
