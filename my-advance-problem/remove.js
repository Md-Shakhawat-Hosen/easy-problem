// Remove falsy value from an object

 const obj = {
    a: 'sagor',
    b : undefined,
    c: true,
    d : false,
    e : 50,
    f : NaN,
    g: null,
    h: 'moynar ma'
 };

 const removeFalsyValue = function(obj) {
        
    for (let i in obj){
        if (!obj[i]) {
            delete obj[i];
        }
    }
    return obj;
 }

console.log(removeFalsyValue(obj));