function jumpingOnClouds(c) {
    let thunderHeads = [];
    for(let i=0; i<c.length; i++) {
        if(c[i] == 1) {
            thunderHeads.push(i);
        }
    }
    
    let result = 0;
    for(let i=0; i<c.length; i++) {
        console.log(i)
        for(let j=0; j<thunderHeads.length; j++) {
            console.log(i+2 != thunderHeads[j] && i+2 < c.length)
            if(i+2 != thunderHeads[j] && i+2 < c.length){
                result++;
                i+=2
            } else if(i+1 != thunderHeads[j] && i+2 < c.length) {
                result++;
                i+=1 
            }
        }
    }
    console.log(result)

}

jumpingOnClouds([0, 0, 0, 0, 1, 0]);