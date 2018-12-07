function activityNotifications(expenditure, d) {
    let msg = 0;
    for(var i=0; i<expenditure.length - d; i++) {
        const days = expenditure.slice(i,i+d).sort();
        const compareExpences = expenditure[i+d];
        const isEven = (days.length % 2) == 0;
        if(isEven) {
            const median = days.reduce((total, num) => total =+ num,0);
            const fraudAlert = median * 2;
            if(fraudAlert <= compareExpences) {
                msg++;
            }
            
        } else {
            const median = days[Math.round(days.length / 2 - 1)];
            const fraudAlert = median * 2;
            console.log(days, compareExpences, median, fraudAlert);
            if(fraudAlert <= compareExpences) {
                msg++;
            }
        }
    }
    console.log(msg);
}
activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5);
activityNotifications([1,2,3,4,5], 4);