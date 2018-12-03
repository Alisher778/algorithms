function aVeryBigSum(ar) {
	return ar.reduce((total, num) => {
		return total += num
	},0);

}

function aVeryBigSum2(ar) {
    let result = 0;
    for(let i=0; i<ar.length; i++) {
        result += ar[i];
    }

    return result;
}
aVeryBigSum([3,4,5]);
aVeryBigSum2([3,4,5]);