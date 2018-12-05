function timeConversion(s) {
   const hour = s.slice(0,2);
   if(hour != 12 && s.endsWith('PM')) {
        const output = (parseInt(hour)+12+s.slice(2)).replace(/PM/, '');
        console.log(output);
   } else if(hour == 12 && s.endsWith('AM')) {
        const output = ('00'+s.slice(2)).replace(/AM/, '');
        console.log(output);
   } else {
        const output = s.replace(/PM|AM/g, '');
        console.log(output)
   }
}

timeConversion('12:00:05AM')