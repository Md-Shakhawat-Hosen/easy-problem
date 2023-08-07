
// Find a large string from an array and also find index number that string

const arrayString = ["shuvo","basudev","limon","shakhwatHosen","talukdar","Hasan"];


 function findLargeString(arr) {
    let largest = arr[0];
        for (let item of arr) {
              if (item.length > largest.length) {
                 largest = item;
              }
        }
        return largest;
 }

 const result = findLargeString(arrayString);
 console.log(result);
 console.log(arrayString.indexOf(result));