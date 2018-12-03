function plusMinus(arr) {
	const obj =  arr.reduce((obj,num) => {
		const typeOfNum = Math.sign(num);
	
		if(typeOfNum == -1) {
			obj.minus++;
		} else if(num == 0) {
			obj.zero++;
		} else {
			obj.plus++;
		}
		return obj
	}, {plus: 0, minus: 0, zero: 0})
	
	for(let x in obj) {
		console.log((obj[x] / arr.length).toFixed(6))
	}	
}
plusMinus([-4, 3, -9, 0, 4, 1])