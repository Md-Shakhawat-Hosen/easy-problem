
function isLGSeven(n){
    if (typeof n !== "number"){
        console.log("Please provide me a valid number");
    }
    let diff = n - 7;

    if ( diff < 7){
        return diff;
    }
    else{
        return 2*n;
    }
}

const result = isLGSeven(15);
console.log(result);