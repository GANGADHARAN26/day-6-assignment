Fix the code to get the largest of three.

Code:

const aa = (f, s, t) => {
    console.log(f, s, t);
    if (f > s && f > t) {
      console.log(f);
    } else if (s > f && s > t) {
      console.log(s);
    } else {
      console.log(t);
    }
  };
  
  aa(1, 2, 3);
  
— — — — — — — — — — — — — — — — — — — — — — — — —
Fix the code to Sum of the digits present in the number

Code:

let n = 123;
console.log(add(n));
function add(n)
{
let sum = 10;

 sum+=n;
 
 return sum;
}
  
  
— — — — — — — — — — — — — — — — — — — — — — — — —

Fix the code to Sum of all numbers using IIFE function

Code:

const arr = [9, 8, 5, 6, 4, 3, 2, 1];

(function () {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
})();
— — — — — — — — — — — — — — — — — — — — — — — — —

Fix the code to gen Title caps.

Code:

var arr = ["guvi", "geek", "zen", "fullstack"];

var ano = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
  }
}

ano(arr);
— — — — — — — — — — — — — — — — — — — — — — — — —

Fix the code to return the Prime numbers

Code:

const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter(num => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
});
console.log(myPrime);
— — — — — — — — — — — — — — — — — — — — — — — — —

Fix the code to sum the number in that array

Code:

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sum = (a, b) => a + b;
const totalSum = num.reduce(sum);
console.log(totalSum);
— — — — — — — — — — — — — — — — — — — — — — — — —

Fix the code to rotate an array by k times and return rotated array using IIFE function

Code:
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = k % arr.length;
(function() {
  arr = [];
  out = arr.slice(-k).concat(arr.slice(0, -k));
  console.log(out);
})();
— — — — — — — — — — — — — — — — — — — — — — — — —

Fix the code to gen Title caps.

Code:

var arr = [“guvi”, “geek”, “zen”, “fullstack”];
(function() {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
 }
})();
— — — — — — — — — — — — — — — — — — — — — — — — —

print all odd numbers in an array using IIFE function

Code:

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 0) {
 console.log(arr[i]);
 }}
})();
— — — — — — — — — — — — — — — — — — — — — — — — —

Fix the code to reverse.

Code:

(function(str){
    str1 = str.split(" ").reverse().join("");
    console.log(str1); 
  })("abcd");
— — — — — — — — — — — — — — — — — — — — — — — — —

Fix the code to remove duplicates.

Code:

var res = function(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      if(typeof arr[i] === "string"){
        arr[i] = arr[i].toLowerCase();
      }
      if(newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
      }
    }
    console.log(newArr);
  }
  
  res(["guvi", "geek", "guvi", "duplicate", "geeK"]);
— — — — — — — — — — — — — — — — — — — — — — — — —

Fix the code to give the below output:

Expected Output:

[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]

Code:

var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[]
while(array.length!=0)
{
  var outer_remove = array.shift();
  while(outer_remove.length!=0)
  {
    var new_object = {};
    var inner_remove = outer_remove.shift();
    var key = inner_remove[0];
    var value = inner_remove[1];
    new_object[key] = value;
  }
  final.push(new_object)
}

console.log(final);
— — — — — — — — — — — — — — — — — — — — — — — — —

Fix the code to give the below output:

Sum of odd numbers in an array

Code:


var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function(a, c) {
  if (c % 2 != 0) {
    return a + c;
  }
  return a;
}, 0);
console.log(s);
— — — — — — — — — — — — — — — — — — — — — — — — —

Fix the code to give the below output:

Swap the odd and even digits

Code:

aa = data => {
    var a = data;
    var l = '';
    for (i = 0; i < a.length - 1; i++) {
      var temp = a[i];
      var s = a[i + 1];
      l += s;
      l += temp;
      i = i + 1;
    }
    if ((a.length % 2) != 0) {
      l += a[a.length - 1];
    }
    console.log(l);
  }
  aa("1234");