function maximumToys(prices, k) {
    const sortPrice = prices.sort((a, b) => a - b);
    let toyNum = 0;
    let toyPrice = 0;
    sortPrice.forEach(price => {
        toyPrice += price;
        if (toyPrice < k) {
            toyNum++;
        }
    });
   console.log(toyNum);

}
maximumToys([3,2,1], 4)