function isValidPhotoName(photoName, imageExtensions){
         if (typeof photoName !== 'string' || !Array.isArray(imageExtensions)){
            console.log("Please provide valid inputs");
         }
         for (let item of imageExtensions){
            if (photoName.toLowerCase().endsWith(item.toLowerCase())){
                return true
            }
            
         }
         return false;
}



const name = 'index.jpg';
const imageEx = ['.png','.jpg','.jepg','.GIF', '.ico'];

const result = isValidPhotoName(name,imageEx);
console.log(result);