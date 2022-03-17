//Kết nối module trong node JS
//import export default ==> ES6 module
const fs = require('fs');

fs.readFile('text.txt', {encoding: 'utf-8'},(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
