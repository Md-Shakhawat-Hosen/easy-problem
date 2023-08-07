

function isJavaScriptFile(name){
        if (typeof name !== "string"){
            console.log("Please provide me a string not integer");
        }
        // return name.toLowerCase().endsWith(".js");
        const newName = name.split('.');

        if (newName[newName.length - 1].toLowerCase() === "js"){
            return true
        }
        else{
            return false;
        }
          
        

}



const result = isJavaScriptFile("index.js.index.JS");
console.log(result);