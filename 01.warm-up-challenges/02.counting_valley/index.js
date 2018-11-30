// https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen
function countingValleys(n, s) {
    let valleyCounter = 0;
    let progress = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] == "D") {
            progress--;
            if(progress == -1){
                valleyCounter++;
            }
        } else {
            progress++;
        }
        
    }
    console.log(valleyCounter)
    return valleyCounter-1;
}

countingValleys(8, 'UDDDUDUU');