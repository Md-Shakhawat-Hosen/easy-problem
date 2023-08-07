
function gemsToDiamond(f1,f2,f3){
   if (typeof f1 !== 'number' || typeof f2 !== 'number' || typeof f3 !== 'number'){
      console.log("please provide a  valid value");
   }
   else if(f1 < 0 || f2 < 0 || f3 < 0){
    console.log("Please provide me a positive value");
   }
   else if (f1 % 1 !== 0 || f1 % 1 !== 0 || f3 % 1 !== 0){
     console.log("Don't allow decimal value. Please give me positive value");
   }
   else{
     let totalDimond = f1*21 + f2*32 + f3*43;
      if (totalDimond > 2*1000){
        return totalDimond - 2000;
      }
      else{
        return totalDimond;
      }
   }

}


const result = gemsToDiamond(100,5,1);
console.log(result);