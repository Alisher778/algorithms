function hourglassSum(arr) {
    let myArr = [];
    for(let i=0; i<4; i++) {
        for(let j=0; j<4; j++) {
            myArr.push(arr[i].slice(j, j+3).reduce((tot, num)=> tot+=num,0) + arr[i+1][j+1] + arr[i+2].slice(j,j+3).reduce((tot, num)=> tot+=num,0));
        }
    }
    const result = Math.max.apply(null, myArr);
    console.log(result);
}
var data = [ [ 1, 1, 1, 0, 0, 0 ],
[ 0, 1, 0, 0, 0, 0 ],
[ 1, 1, 1, 0, 0, 0 ],
[ 0, 9, 2, -4, -4, 0 ],
[ 0, 0, 0, -2, 0, 0 ],
[ 0, 0, -1, -2, -4, 0 ] ];
hourglassSum(data);