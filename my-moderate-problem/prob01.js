function findingBadData(arr){
    if (Array.isArray(arr) !== true){
        console.log("Please provide me an array");
    }
    
    let badData = 0;
    for (let item of arr){
           if (typeof item !== 'number'){
             console.log("Please provide me a number array");
           }
           else{
            if (item < 0) {
              badData += 1;
            }
           }
           
    }
    return badData;

}

const array = [1,-2,-3,4];
const result = findingBadData(array);
console.log(result)