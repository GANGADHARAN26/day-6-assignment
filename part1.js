1.Find the culprit

fix.html

<!DOCTYPE html>
<html>
<body>
 <script>
 alert( "I’m JavaScript!");
 </script>
 Whats the error in this ?
</body>
</html>
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Find the culprit and invoke the alert

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
scripts.js

alert("I’m invoked!");
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Explain the below how it works

explain.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Fix the below to alert Guvi geek

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek"
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Fix the below to alert hello Guvi geek

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' );
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Fix the below to alert sum of two numbers

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a + b);
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Fix the below to alert sum of two numbers

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a + b);
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

If you run the below scritpt you will get “Code is Blasted”

Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

var a = "2" < "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

How to get the success in console.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let a = parseInt(prompt("Enter a number?"));
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

How to get the correct score in console.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let value = parseInt(prompt('How many runs you scored in this ball'));
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Fix the code to welcome the Employee

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Fix the code to welcome the boss

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

// You cant change the value of the msg
var message;
if (null || 2 || undefined )
{
 message = "welcome boss";
}
else
{
  message = "Go away";
}
  console.log(message);
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Fix the code to welcome the boss

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let message;
let lock = "";
//Dont change any code below this 
if (null || lock || undefined )
{
    message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Fix the code to welcome the boss

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let message;
let lock = 2;
//Dont change any code below this
if (lock && "" || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Change the code to print

3

2

1

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

//You can change only 2 characters
let i = 3;
while (i>0) {
  console.log( i-- );
}
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Change the code to print 1 to 10 in 4 lines

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

for(var i=0;i<10;i++){
console.log(i);
}
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Change the code to print even numbers

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
  console.log(num)
}
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Change the code to print all the gifts

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]}` +"and added to the bowl");
}
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Fix the code to disarm the bomb.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let countdown = 100;
while (countdown > 1) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Whats the msg printed and why?

var lemein = “0”;
var lemeout = 0;
var msg = “”;
if (lemein) {
 msg += “hi”;
 }
if (lemeout) {
 msg += ‘Hello’;
}
console.log(msg);

Ans: the output is (hi) because lemein have character which satisfies the condition

Whats the msg printed and why? Guess you answer before running it.

var lemein = “0”;
var lemeout = 0;
var msg = “”;
if (lemein) {
 msg += “hi”;
 }
if (lemeout) {
 msg += ‘Hello’;
}
console.log(msg);

Ans: the output is (hi) because lemein have character which satisfies the condition