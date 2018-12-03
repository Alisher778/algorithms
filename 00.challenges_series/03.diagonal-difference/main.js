function diagonalDifference(arr) {
	let leftDiagonal = 0;
	let rightDiagonal = 0;

	for(let i=0, j=arr.length - 1; i<arr.length; i++, j--) {
		leftDiagonal += arr[i][i];
		rightDiagonal += arr[i][j];
	}
	return Math.abs(leftDiagonal - rightDiagonal);
}
diagonalDifference([[1,2,3], [4,5,6], [7,8,4]]);