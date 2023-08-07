
const sentence = "Hello, I'm shakhawat hosen. Recently I finished my graduation from North south University. shakhawat is a shy person. Now shakhawat try to hard for an internship. He joined a course, which is very effective for learning and experience";

let matches = sentence.match(/Shakhawat/ig);

matches = matches ? matches.length : 0;
console.log(matches)

let position = sentence.search(/shakhawat/gi);
 
position = (position >= 0) ? position : "Not Found";
console.log(position)