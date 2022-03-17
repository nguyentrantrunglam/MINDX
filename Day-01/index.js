const obj1 = { x: 20, y: 30 };

function cloneDeep(obj) {
    // return obj3 = { ...obj }             // Cách 1
    return JSON.parse(JSON.stringify(obj)); // Cách 2
}
const obj2 = cloneDeep(obj1)
obj2.x = 10;
console.log(obj1);
console.log(obj2);

// const macbooks = ['macbook2015', { model: 'macbook2014' }, 'macbook2017'];
// const apples = [...macbooks];
// apples[0] = 'air';
// apples[1].model = 'm1';

// console.log(macbooks)
// console.log(apples)

// let arr = [1, 2, 3, 4, 5, 6, 7];
// function inBetween(a, b) {
//     return function(x) {
//         return x>=a && x<=b
//     }
// }

// function inArray(arr) {
//     return function (x) {
//         return arr.includes(x)
//     }
// }
// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// function Counter() {
//     let count = 0;
  
//     this.up = function() {
//       return ++count;
//     };
//     this.down = function() {
//       return --count;
//     };
//   }
  
//   let counter = new Counter();
  
//   console.log( counter.up() ); 
//   console.log( counter.up() ); 
//   console.log( counter.down() );

// console.log("hello");

// setTimeout(() => console.log("world"), 0);

// console.log("hi");

var text = 'outside'; //outer scope
function show() {
  console.log(text) //undefined
  var text = 'inside'; // inner scope
}
show();