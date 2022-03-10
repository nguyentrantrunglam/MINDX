## EX1
```
const obj1 = { x: 20, y: 30 };

function cloneDeep(obj) {
    return obj3 = {...obj}
}
const obj2 = cloneDeep(obj1)
obj2.x = 10;
console.log(obj1);
console.log(obj2);
```
## EX2
```
const macbooks = ['macbook2015', { model: 'macbook2014' }, 'macbook2017'];
const apples = [...macbooks];
apples[0] = 'air';
apples[1].model = 'm1';

console.log(macbooks) //[ 'macbook2015', { model: 'm1' }, 'macbook2017' ]
console.log(apples) //[ 'air', { model: 'm1' }, 'macbook2017' ]
```
#### Giải thích

Biến apples sử dụng Spread Operator để clone biến macbooks. Array của biến macbook có type lần lượt là [value, reference, value] => Array của apples cũng tương tự. Sau khi clone thì tại apples[1] giá trị ở đó là tham chiếu địa chỉ ô nhớ của Object trong biến macbooks. Nên khi modify giá trị của Object trong apples là ta đang modify của cả giá trị của Object trong biến apples. Còn apples[0] là ta modify tham trị nên ko ảnh hưởng đến mảng cũ.

## EX3
```
var text = 'outside';
function show() {
  console.log(text) //undefined
  var text = 'inside';
}
```

## EX4
```
let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a, b) {
    return function(x) {
        return x>=a && x<=b
    }
}

function inArray(arr) {
    return function (x) {
        return arr.includes(x)
    }
}
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10])));
```
## EX5
```
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // 1
alert( counter.up() ); // 2
alert( counter.down() ); // 1
```
## EX6
```
console.log("hello");

setTimeout(() => console.log("world"), 0);

console.log("hi");
```