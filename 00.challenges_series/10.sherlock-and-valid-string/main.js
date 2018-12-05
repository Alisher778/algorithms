function isValid(s) {
    const strToArr = s.split('');
    let obj = {};
    strToArr.forEach(char => {
        if(obj[char])obj[char]++
        else obj[char] = 1;
    });
    
    let result = []
    for(let x in obj) {
        result.push(obj[x]);
    }
    console.log(result.sort((a,b) => a-b))
    const min = Math.min.apply(null, result);
    const max = Math.max.apply(null, result);
    const maxArr = result.filter(i => i == max);
    const minArr = result.filter(i => i == min);
    const misc = result.filter(i => i != min && i != max);

    

    if(s.length == 1) {
        console.log('YES')
    }  else if(maxArr.length > 1 && minArr.length <= 1) {
        console.log('YES')
    } else if(maxArr.length === 1 && max-1 == min && minArr.length >= maxArr.length) {
        console.log('YES')
    } else {
        console.log('NO')    
    }
     
   
}
// isValid('abbcc')
// isValid('aabbccddeefghi');
isValid('ihtuwvgfwvgfelssduismbujdnxjtmjkjdevhwmaiuooiwoiwugqblrbqiwcxbanmdhfivtjqlyxrtumduxreaxswtcmfhjrwemtyjhcywmockxtwikvwboqfphbrtwbunuqwmvtpayuxgvtpjcqsfgssjmtuqfctbjrlkkjpcpeabeoymxpfyugaxidvqmbcgibgsumlrllqsdvbliffdstkreaankrlmsfqfyqxxyekrsakcvrmsyksxnpajqnvotqovepcwpcllyopfdmxxjhcnymgkxqjqyljnbisvopdkttgmwslejhejbgvjwpanvumxkfkvmtlryvucdrisiibsvtioqcohgrivpxhmlgrkxwgkexdwpihhfayjobsnfsxvdhrhanllxirjitvqtwlhvmrewyphdyaylunetcbvklvlxhodnemegqjkoipdtasrgleorikhqhhkvxkinfjylaqqwmbovstlngaaltyasqutawhtnsvqosslwfvfgjxxtolphnkyvgamntawrdlwiuacqirfjliarutjygidpyjcvaifibnprgwjdirngmtjmevqntnkchcgxautanqbfcqjlsajdfbdisqtrbjjvoglvpwftnmcwohedqtvypumihgiiiujwuvuikguxuqmpkohslvorndrkqnojfaghsaydtswkexrjjjrvujrqvrsyvufrhnjsmtxljpdjhrulooydrfdvdaxrrsbmaisxxsnnmincetrmfjphqddeftimsfftmvbijmikqbirenmjlmuywmdsejxijlhbpusemntqykpijaxtoktuajqcpruhmsjqdmqdhqebeyqupinjlhwwfbmxqtqhanrtegmmmjhstxbgwwcdqblskvkinjdijemkuoqwutjfcfbvcrybdtelwdbwuvcemuaffkhmorhpxbclvnfvrpurapyxknkpswkverdccdswyeaqxqrytswsknwuenwdwaoehlltduybndpjmigyukpwv{-truncated-}');