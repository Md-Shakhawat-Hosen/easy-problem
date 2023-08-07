
function bothDivisible() {
    const divisibleByThree = [];
    const divisibleByFive = [];
    const divisibleByBoth = [];
    for (let i = 1; i <= 100; i++) {
           if (i % 5 === 0 && i % 3 === 0) {
             divisibleByBoth.push(i);
           }
           else if ( i % 3 === 0){
            divisibleByThree.push(i);
           }
           else if (i % 5 === 0) {
            divisibleByFive.push(i);
           }
           
    }

    console.log(divisibleByThree)
    console.log(divisibleByFive)
    console.log(divisibleByBoth)
}

bothDivisible()