
function isInteger(number){
    if (typeof number !== 'number'){
            console.log("Please provide me a integer number");
    }
    if (number % 1 === 0){
        return true;
    }
    return false;

}



let result = isInteger(4.56);
console.log(result);