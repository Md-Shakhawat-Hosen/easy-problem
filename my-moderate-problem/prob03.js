function printDetails(obj){
        
        if (Array.isArray(obj) || typeof obj !== 'object' ){
            console.log("Please provide me a object");
        }
        else {
            const name = obj.name || 'empty';
            const age = obj.age || "empty";
            const email = obj.email || "empty";
            const gadgets = obj.gadgets || "empty";
            const bou = obj.bou || 'empty';

            return "my name is "+name+" and age is:" +age+ " my have "+gadgets+" gadgest  and my bou "+ bou
           
        }
}

const myObj = {
    name: 'shakhawat',
    age : 25,
    email : 'abc@gmai.com',
    gadgets : 1,
    bou : ''
}
const arr = [12,4,5]
const result = printDetails(myObj);
console.log(result);