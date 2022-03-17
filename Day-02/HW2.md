## Bài 1:
```
const { error } = require('console');
const fs = require('fs');
let data = '18572';

fs.writeFile("numbers.txt",data ,(error)=>{
    if (error) {
        console.log(error);
    } else {
        console.log("File was write successfully");
    }
})
```

## Bài 3:
```
fs.readFile('numbers.txt', {encoding: "utf8"}, (error,data)=>{
    if (error) {
        console.log(error);
    } else {
        var number = data;
        console.log(number);
        console.log(data);
    }
})
console.log(number);
var counter = 0;
for (let i = 0; i < number.length; i++) {
    if(number[i]%2==1){
        counter++;
    }
}
console.log(counter);

fs.writeFile('result.txt',counter+'',(error)=>{
    if (error) {
        console.log(error);
    } else {
        console.log("File was write successfully");
    }
})
})
```