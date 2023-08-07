//  How to remove falsy value from an array

const arr = [
      'shuvo',
      undefined,
      '56',
      40,
      null,
      false,
      true,
      'sagor',
      NaN
];


// const newArr = arr.filter(function(value){
//      if (value){
//         return true;
//      }
//      else {
//         return false;
//      }
// });

const newArr = arr.filter(Boolean);
console.log(newArr);