

function mindGame(n){
    if (typeof n !== "number" || n <= 0){
        console.log("Please provide me a positive number");
    }
    let a = ((((n*3) + 10) / 2) - 5);
    return a;
}

const result = mindGame(5);
console.log(result);