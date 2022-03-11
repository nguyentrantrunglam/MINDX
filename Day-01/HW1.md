## EX1
```
const obj1 = { x: 20, y: 30 };

function cloneDeep(obj) {
    return obj3 = {...obj}
}
const obj2 = cloneDeep(obj1)
obj2.x = 10;
console.log(obj1); //{ x: 20, y: 30 }
console.log(obj2); //{ x: 10, y: 30 }
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

Biến apples được clone từ macbook nên có cùng cấu trúc => macbooks[1] và apples[1] có cùng kiểu giá trị tham chiếu nên khi thay đổi apples[1] thì macbooks[1] cũng thay đổi theo
còn macbooks[0] và apples[0] , macbooks[2] và apples[2] là giá trị nguyên thủy nên vẫn được giữ nguyên

## EX3
#### Đoạn code được hiểu
```
var text = 'outside';
function show() {
  var text = undefined;
  console.log(text); //undefined
  text = 'inside';
}
```
#### Giải thích
Đây chính là hoisting trong javascript, điều đó co nghĩa là text không được đẩy lên cho nên text = undefined

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