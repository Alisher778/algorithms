function stringConstruction(s) {
    const strToArr = s.split('');
    let newStr = '';
    strToArr.forEach(char => {
        if (!newStr.includes(char)) {
            newStr += char;
        }
    });
    return newStr.length;
}

stringConstruction('abcabc');