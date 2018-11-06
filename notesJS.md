## JS Notes

---
-	[Hello world](#Hello)
-	[Variables](#Variables)
-	[Input](#Input)
-	[Conditional statements](#Conditional)
-	[Loops](#Loops)
-	[Functions](#Functions)
-	[Lists,strings..](#Data)
-	[Objects](#Objects)
-	[Errors](#Errors)
-	[Regex](#Regex)
-	[Time](#Time)
-	[Asynchronous Programming](#asynchronous-programming)
-	[Interacting with html](#interacting-with-html)
-	[Event handlers](#event-handlers)

---
-	[Design patterns](#design-patterns)
---

### Hello world<a name="Hello"></a>
```js
console.log("Hello world!");
// outputs Hello world! to console

alert("Hello world");
// pop-outs small box saying Hello world

```
---
---
### Variables<a name="Variables"></a>
```js
let hello = "Hello world!";
console.log(hello);
```
---
---
### Input<a name="Input"></a>
```js
let word = prompt("Write something and il print it");
console.log(word);
```
---
---
### Conditional statements<a name="Conditional"></a>
```js
/*-----------
 if/else if/else
*/
let theNumber = Number(prompt("Pick a number");
if(!Number.isNaN(theNumber)){
	console.log("Your number is " +  theNumber);
} else{
	console.log("Hey why you didnt write number?");
}

let num = Number(prompt("Pick a number"));
if (num < 10) {
	console.log("Small");
} else if (num < 100) {
	console.log("Medium");
} else {
	console.log("Large");
}

/*-----------
 switch
*/
switch (prompt("What is the weather like?")) {
	case "rainy":
		console.log("Remember to bring an umbrella.");
		break;
	case "sunny":
		console.log("Dress lightly.");
	case "cloudy":
		console.log("Go outside.haha");
		break;
	default:
		console.log("Unknown weather type!");
		break;
}
```

---
---
### Loops<a name="Loops"></a>

```js
/*-----------
 while
*/

let result = 1;
let counter = 0;
while (counter < 10) {
	result = result * 2;
	counter = counter + 1;
}
console.log(result);
// 1024

/*-----------
 do while
*/
let yourName;
do {
	yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
// prompts and loops until you input some "name"

/*-----------
 for
*/
for(let number = 0 ; number <= 12; number = number+2) {
	console.log(number);
}
// 0
// 2
// ..

for(let i of [1,2,3])
	console.log(i);
// 1
// 2
// 3
// this is like "for i in [1,2,3,4]" in python

for(;;){ // its like while(true) loop
	console.log("oioi")
}
```

**Breaking** out of loop
```js
for(let number = 0; number<=12;number=number+1){
	if (number == 5){
		console.log("We got to 5 and we are breaking loop");
		break;
	}
}
```

---
---
### Functions<a name="Functions"></a>

A function definition is a regular binding where the value of the biding is a function
```js
const square = function(x){
	return x*x;
}
console.log(square(4));
// 16

// Or you can define function like this
function square(x){
	return x*x;
}
console.log(square(4));
// 16
```
**"Inline"**
```js
n => n<0;
// use ? 
function onlyPositive(array,test){
	for(let n of array){
		if(test(n))
			return false;
	}
	return true;
}
console.log(onlyPositive([1,2,3,4],n=>n<0));
// true
console.log(onlyPositive([1,2,3,-2],n=>n<0));
// false
```


**Optional arguments**
```js
function minus(a,b){
	if(b===undefined) return -a;
	else return a-b;
}
console.log(minus(10));
// -10
console.log(minus(10,5));
// 5

/*-----------
 Assigning default to value
*/
function power(base,exponent=2){
	let result = 1
	for(let count=0;count<exponent;count++){
		result *= base;
	}
	return result;

console.log(power(4));
// 16
console.log(power(2,6));
// 64
```
**Function that returns function**
```js
function multiplier(factor) {
	return number => number * factor;
}

let twice = multiplier(2);
let half = multiplier(0.5);
console.log(twice(5));
// 10
console.log(half(5));
// 2.5
```

---
---
### Lists,strings..<a name="Data"></a>

**Lists**
```js
let listOfNumbers = [2,3,4];
console.log(listOfNumbers[2]);
// 4 

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// [1, 2, 3, 4, 5]
console.log(sequence.pop());
// 5
console.log(sequence);
// [1, 2, 3, 4]

/*-----------
 Includes
*/
[1, 2, 3].includes(2);    // true
[1, 2, 3].includes(4);    // false
[1, 2, 3].includes(3, 3); // false

/*-----------
 Remove particular element from list
*/
var array = [1,2,3];
var index = array.indexOf(2);
if (index>-1)
	array.splice(index,1);


/*-----------
 Slicing
*/
console.log([0, 1, 2, 3, 4].slice(2, 4));
// [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// [2, 3, 4]

/*-----------
"Unpacking list"
*/
let words = ["never", "fully"];
console.log(["will", words, "understand"]);
// ["will", ["never", "fully"], "understand"]

console.log(["will", ...words, "understand"]);
// ["will", "never", "fully", "understand"]
```

**Strings**
```js
let s = "This is string"
console.log(s);
// This is string
```
String methods
```js
/*-----------
 slice
*/
console.log("testing".slice(1,4));
// est
console.log("testing".slice(2));
// sting

/*-----------
 indexOf 
*/
console.log("testing".indexOf("i"));
// 4
console.log("testing".indexOf("in"));//returns index of first char if found
// 4

/*-----------
 trim 
*/
console.log("  okay \n ".trim());
// okay

/*-----------
 split/join 
*/
let sentence = "testing this test msg";
let words = sentence.split(" ");
console.log(words);
// ["testing", "this", "test", "msg"]
console.log(words.join("|"));
// testing|this|test|msg

/*-----------
 repeat 
*/
console.log("OI".repeat(3));
// OIOIOI
```

---
---
### Objects<a name="Objects"></a>
**Objects**
```js
let day1 = {
  b: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.n);
// false
console.log(day1.events[0]);
// work
console.log(day1.nope);
// undefined
day1.nope = "nice";
console.log(day1.nope);
// nice

/*-----------
 Delete obj property
*/
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// 1
delete anObject.left;
console.log(anObject.left);
// undefined
console.log("left" in anObject);
// false
console.log("right" in anObject);
// true


/*-----------
 Copy all properties from one obj to another
*/
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4}); // note that b was changed from initial objA b
console.log(objectA);
// {a: 1, b: 3, c: 4}


/*-----------
 Mutability
*/
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// true
console.log(object1 == object3);
// false

object1.value = 15;
console.log(object2.value); // note that obj1 and obj2 are pointing to same memory
// 15
console.log(object3.value);
// 10

/*-----------
 shift,push,unshift
*/
let todoList = [1,2,3];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
console.log(todoList);  // [1, 2, 3]
rememberUrgently(6);
console.log(todoList);  // [6, 1, 2, 3]
console.log(getTask()); // 6
console.log(todoList);  // [1, 2, 3]
```

**Classes**
```js
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
blackRabbit.speak("u");
// The black rabbit says 'u'
killerRabbit.speak("hm");
// The killer rabbit says 'hm'
```
**static**
```js
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}
console.log(Temperature.fromFahrenheit(86))  // note i didnt make new class, i rather used 
// 30                                           static method
let temp = new Temperature(22);
console.log(temp.fahrenheit);
// 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// 30
```
**Inheritance**
```js
class Human{
	constructor(money,powers="no"){ // optional arg powers
        this.money = money;
        console.log(`You created class with ${money}$`)
    }
    fly(){
    	console.log("I cant fly");
    }
}

class Superhero extends Human{ //inherits from human
    fly(){     // polymorphism
 	   console.log("GVGGGGGGG");
    }
}

let h = new Human(10);
// You creaded class with 10$
let s = new Superhero(99999,"daje brutalne bese");
// You created class with 99999$

h.fly();
// I cant fly
s.fly();
// GVGGGGGGG

```

**toString**
```js
/* ---------------------
When you call the String function (which converts a value to a string) 
on an object, it will call the toString method on that object to try to 
create a meaningful string from it. 
------------------------*/

Rabbit.prototype.toString = function(){
	return `a ${this.type} rabbit`;
}
console.log(String(blackRabbit));
// a black rabbit
```


**Maps**
```js
let ages = {
	tt: 39,
 	kk: 22,

};
console.log(`tt is ${ages["tt"]}`);
// tt is 62
console.log("Is kk age known?", "kk" in ages);
// Is kk age known? false
console.log("Is toString's age known?", "toString" in ages);
// Is toString's age known? true

//============================
function protoRabbit(){
 console.log("Rabbit created"); 
}
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

rabb = makeRabbit("luck");
console.log(rabb.type);
// luck

/*
Using plain objects as maps is dangerous. There are 
several possible ways to avoid this problem. First, it is 
possible to create objects with no prototype. If you pass 
null to Object.create, the resulting object will not derive 
from Object.prototype and can safely be used as a map.

Object property names must be strings. If you need a map 
whose keys can’t easily be converted to strings—such as 
objects—you cannot use an object as your map.

Fortunately, JavaScript comes with a class called Map 
that is written for this exact purpose. It stores a 
mapping and allows any type of keys
*/
let ages = new Map();
ages.set("tt",22);
ages.set("kk",33);
ages.set("rr",44);
ages.set("ss",55);

for(let k of ages)
	console.log(`Key(${k[0]})->Value(${k[1]})`);

/*
Key(tt)->Value(22)
Key(kk)->Value(33)
Key(rr)->Value(44)
Key(ss)->Value(55)
*/
```

---
---
### Errors<a name="Errors></a>

**Strict mode**
```js
function canYouSpotTheProblem(){
	"use strict";
	for(counter = 0; counter < 10;counter++)
		console.log("Cat");
}
canYouSpotTheProblem();
// ReferenceError: counter is not defined 

/*
Normally, when you forget to put let in front of your binding, as with counter in 
the example, JavaScript quietly creates a global binding and uses that. In strict 
mode, an error is reported instead.
*/
// Another example
function Person(name){this.name = name;}
let kk = Person("kk"); // forgot to put new Person .. ups
console.log(name);
// kk
/*
So the Person call without 'new' returned undefined and created new global binding 'name'
*/
"use strict";
function Person(name){this.name = name;}
let kk = Person("kk"); // forgot to put new Person .. ups
// TypeError: Cannot set property 'name' of undefined


// Take this example (function tries to convert a whole number to a string in a given base
function numberToString(n, base = 10) {
  let result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n = Math.floor(n/base);
  } while (n > 0);
  return sign + result;
}
console.log(numberToString(10, 2)); // expected output 1010
// Output is not nice (alot of numbers)
/*!!!!!!!!!!
Even if you see problem already, read this
This is where you must resist the urge to start making random changes to the code 
to see whether that makes it better. Instead, think. Analyze what is happening and 
come up with a theory of why it might be happening. Then, make additional observations 
to test this theory—or, if you don’t yet have a theory, make additional observations to 
help you come up with one.
*/

/*
 After some theory put some console.log() on important places (after loops, after function calls...)
 After few strategic console.logs we can see that n/=base doesnt produce whole number
 what we actually want is n = Math.floor(n/base);
*/

/*--------
  Try/catch/finally
*/

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?(left/right)") == "L") {
    return "a cat";
  } else {
    return "two attacking cats";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("OIOIOIOI: " + error);
}finally{
  console.log("meow");
}

/*
input: 
	left
output:
	You see a cat
	meow

input:
	ups
output:
	OIOIOIOI: Error: Invalid direction: ups
	meow
*/
```

---
---
### Regex<a name="Regex"></a>

```js
/*---------
  test (return true of false if re was successfull)
*/
let re1 = new RegExp("abc");
let re2 = /abc/;        // rel2 has same pattern as rel1
console.log(re2.test("abcde"));   // true
console.log(/abc/.test("abcde")); // true
let s = "abcd";
console.log(re2.test(s)); // true



/*---------
  exec (return null if no match was found and return object with inf about the match otherwise)
*/
let re2 = /abc/;        // rel2 has same pattern as rel1
console.log(re2.exec("abcde"));   // ["abc"]
console.log(/abc/.exec("abcde")); // ["abc"]
let s = "abcd";
console.log(re2.exec(s)); // ["abc"]

/*---------
  search method (returns first index on which the expression was found or -1 if it wasnt found)
*/
console.log("  word".search(/\S/));
// 2
console.log("    ".search(/\S/));
// -1


/*---------
  Usefull functions
*/
// strip comments
function stripComments(code) {
	return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
// 1 + 3
console.log(stripComments("x = 10;// ten!"));
// x = 10;
console.log(stripComments("1 /* a */+/* b */ 1"));
// 1  1

//loop over matches
function loopRe(s,re){
	let match;
	while (match = number.exec(input))
		console.log("Found", match[0], "at", match.index);  
}
let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
loopRe(input,number);
// Found 3 at 14
// Found 42 at 33
// Found 88 at 40

```


### Time<a name="Time"></a>
```js
console.log(new Date());
// Sun Oct 21 2018 22:11:59 GMT+0200 (Central European Summer Time)

console.log(new Date(2009, 11, 9));
// Wed Dec 09 2009 00:00:00 GMT+0100 (Central European Standard Time)
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// Wed Dec 09 2009 12:59:59 GMT+0100 (Central European Standard Time)


console.log(new Date(2013, 11, 19).getTime());
// 1387407600000
console.log(new Date(1387407600000));
// Thu Dec 19 2013 00:00:00 GMT+0100 (CET)

```

### Asynchronous Programming<a name="asynchronous-programming"></a>
* Synchronous programming 
```
function1--w--o--r--k--i--n--g-->done------------------------------------\
-------w-a-i-t-i-n-g--f-o-r--f1-->function2--w--o--r--k--i--n--g-->done-->finished
```
* Asynchronous programming
```
-->function1--w--o--r--k--i--n--g-->done------\
----->function2--w--o--r--k--i--n--g-->done--->finished
```
```
Asynchronous programing is useful in this case.. it's 
much faster to proces multiple requests in the same time
```
```js
/*---------
  Callbacks
*/
setTimeout(() => console.log("Hello"), 1000);
// This outputs Hello to console with 1s delay 

/*---------
  Promises
*/
// very useful when you are getting some values from db, and waiting for db to send them
// you can use promise to execute some code right after you achive that promise, see example

function storage(db,name){
	return new Promise(resolve=>{db.getUser(name)});
} 
storage(database,"admin")
	.then(value=> console.log("Got", value));
// js doesnt call value untill storage returned something.. useful right?

/*--------
 Errors
*/
new Promise((_, reject) => reject(new Error("Fail")))
  .then(value => console.log("Handler 1"))    
  .catch(reason => {   // if there is error catch it
    console.log("Caught failure " + reason);  //log it
    return "nothing";   // and return nothing
  })
  .then(value => console.log("Handler 2", value)); //after that try calling value agian
// Caught failure Error: Fail
// Handler 2 nothing

```


### Interacting with html<a name="interacting-with-html"></a>

Take following html as example:
```html
<p>Test1</p>
<p>Test2<strong> Test3</strong></p>
```
```js

/*---------
  Selecting elements
*/
function listElements(node) {
  for (let i = 0; i < node.childNodes.length; i++) { // go through html (you cant use for/of!)
    let child = node.childNodes[i];  // get first element( in this case <p>)
    if (child.nodeType == document.ELEMENT_NODE) {
      console.log(child);  
      listElements(child); // call list elements resursivly cause to "pick up" nested html 
    }					   // in this case <strong> tag in <p>
  }
}
listElements(document.body);
/* output:
HTMLBodyElement{}
HTMLParagraphElement{}
HTMLParagraphElement{}
HTMLElement{}
*/


// On the same example html we can select specific html tags
console.log(document.body.getElementsByTagName("p"));
/* output
HTMLCollection {
	0:	HTMLParagraphElement{}
	1:	HTMLParagraphElement{}
}
*/
```
Changing the document
```html
<p>One</p>
<p>Two</p>
<p>Three</p>
```
```js
let paragraphs = document.body.getElementsByTagName("p");
document.body.insertBefore(paragraphs[2], paragraphs[0]);

/* page displays:
Three
One
Two
*/
/* Note
All operations that insert a node somewhere 
will, as a side effect, cause it to be 
removed from its current position (if it has one)
*/

```
Creating nodes
```html
<p>The <img src="cat.png" alt="Cat"></p>

<p><button onclick="replaceImg()">Replace</button></p>
```
```js
function replaceImg(){
	let image = document.body.getElementsByTagName("img")[0];
	let text = document.createTextNode(image.alt);
	image.parentNode.replaceChild(text,image);
}
```

### Event handlers<a name="event-handlers"></a>


When you click on page, outputs oi
```html
<p>Demo html</p>
```
```js
window.addEventListener("click", () => {
    console.log("oi");
});
```

---
Only if you click on button it outputs oi
```html
<button>Click me</button>
<p>No handler here.</p>
```
```js
let button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("oi");
});
```

---
Button that outputs oi only one time , then removes listener from it
```html
<button>Act-once button</button>
```
```js
let button = document.querySelector("button");
function once() {
  console.log("oi");
  button.removeEventListener("click", once);
}
button.addEventListener("click", once);
```

---
You can click button with L/M or R mouse button, and it will output belonging text
```html
<button>Click me any way you want</button>
```
```js
let button = document.querySelector("button");
button.addEventListener("mousedown", event => {
  if (event.button == 0) {
    console.log("Left button");
  } else if (event.button == 1) {
    console.log("Middle button");
  } else if (event.button == 2) {
    console.log("Right button");
  }
});
```

---
When you click button it will output text content of button
```html
<button>A</button>
<button>B</button>
<button>C</button>
```
```js
document.body.addEventListener("click", event => {
  if (event.target.nodeName == "BUTTON") {
    console.log(event.target.textContent);
  }
});
```

---
Removes default behaviour(it wont open link , it will output nope)
```html
<a href="https://github.com">Github</a>
```
```js
let link = document.querySelector("a");
link.addEventListener("click", event => {
  console.log("Nope.");
  event.preventDefault();
});
```

---
Multiple keydowns as trigger
```html
<p>Press Control-Space to continue</p>
```
```js
window.addEventListener("keydown", event => {
    if (event.key == " " && event.ctrlKey) {
      console.log("Continuing!");
    }
});
```

---
Drawing dots on screen with mouse press
```css
body {
    height: 200px;
    background: beige;
}
.dot {
    height: 8px; width: 8px;
    border-radius: 4px; /* rounds corders (basicly put that half of dots h or w to round perfectly*/
    background: blue;
    position: absolute;
}
```
```js
window.addEventListener("click", event => {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px"; // -4 cause of h and w is 8 if you didnt sub 4 
    dot.style.top = (event.pageY - 4) + "px";  // dot would be down and right from mouse
    document.body.appendChild(dot);            // So basicly sub half of dots h from y and half
});                                            // of w from x
```

---
Dragging
```html
<p>Drag the bar to change its width:</p>
<div style="background: orange; width: 60px; height: 20px">
</div>
```
```js
let lastX;
console.log(lastX);// tracks last mouse X position
let bar = document.querySelector("div");  // 'gets' bar
bar.addEventListener("mousedown", event => {
  if (event.button == 0) {
    lastX = event.clientX; // gets mouse X
    window.addEventListener("mousemove", moved); // adds  listener and calls moved
    event.preventDefault(); // remove selection of bar
  }
});

function moved(event) {
  if (event.buttons == 0) {                         //event.buttons==0->no buttonts down
    window.removeEventListener("mousemove", moved); // 1-> left button, 2->right, 4-> middle
  } else {
    let dist = event.clientX - lastX;
    let newWidth = Math.max(10, bar.offsetWidth + dist);
    bar.style.width = newWidth + "px";
    lastX = event.clientX;
  }
}
```

---
Scroll progress indicator
```css
#progress {
  border-bottom: 5px solid blue;
  width: 0;
  position: fixed;
  top: 0; left: 0;
}
```
```html
<div id="progress"></div>
```
```js
// Create some content
document.body.appendChild(document.createTextNode(
  "oioioioioioio ".repeat(1000)));

let bar = document.querySelector("#progress");
window.addEventListener("scroll", () => {
  let max = document.body.scrollHeight - innerHeight;
  bar.style.width = `${(pageYOffset / max) * 100}%`;
});
```

---
Focus events
```html
<p>Name: <input type="text" data-help="Your full name"></p>
<p>Age: <input type="text" data-help="Your age in years"></p>
<p id="help"></p>
```
```js
let help = document.querySelector("#help");
let fields = document.querySelectorAll("input");
for (let field of Array.from(fields)) {
  field.addEventListener("focus", event => {
    let text = event.target.getAttribute("data-help");
    help.textContent = text; //Write Your full name or Your age in years below input
  });
  field.addEventListener("blur", event => {
    help.textContent = "";
  });
}
```

---
Input events
```html
<textarea> Type something here... </textarea>
```
```js
let textarea = document.querySelector("textarea");
let timeout;
textarea.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => console.log("Typed!"), 500);
});
```

---
Timing (setInterval and clearInterval are used to set timers that should repeat every X milliseconds
```js
let ticks = 0;
let clock = setInterval(() => {
  console.log("tick", ticks++);
  if (ticks == 10) {
    clearInterval(clock);
    console.log("stop.");
  }
}, 200);
```

---
### Design patterns<a name="design-patterns"></a>

---
-   [Basics](#basics)
-   [When is pattern valid?](#when-is-pattern-valid)
-   [What it should have?](#what-it-should-have)
-   [Creating New](#creating-new)
-   [Anti patterns](#anti-patterns)
-   [Categories of Design Pattern](#categories-of-design-pattern)
---

#### Basics<a name="basics"></a>
```
A pattern is a reusable solution that can be applied to 
commonly occurring problems in software design 

Patterns are not an exact solution. It’s important that we 
remember the role of a pattern is merely to provide us with 
a solution scheme. Patterns don’t solve all design problems 
nor do they replace good software designers, however, 
they do support them
```

---
Some other advantages that patterns offer:
* Reusing patterns assists in preventing minor issues that can 
  cause major problems in the application development process
* Patterns can provide generalized solutions which are documented 
  in a fashion that doesn't require them to be tied to a specific problem
* Certain patterns can actually decrease the overall file-size 
  footprint of our code by avoiding repetition. 
* Patterns add to a developer's vocabulary, which makes communication faster.
* Patterns that are frequently used can be improved over time by harnessing 
  the collective experiences other developers using those patterns contribute 
  back to the design pattern community

---
#### When is pattern valid<a name="when-is-pattern-valid"></a>

A pattern may be **considered "good"** if it does the following:
* Solves a particular problem
* The solution to this problem cannot be obvious
* The concept described must have been proven
* It must describe a relationship

---
One of the additional requirements for a pattern to be valid 

is that they display some recurring phenomenon (**the rule of three**)

* Fitness of purpose -> how is the pattern considered successful?
* Usefulness -> why is the pattern considered successful?
* Applicability -> is design worthy of being a pattern because it has wider applicability?

---
#### What it should have<a name="what-it-should-have"></a>
A design pattern should have a:
* **Pattern name** and a description
* **Context outline** -> the contexts in which the pattern is effective in 
  responding to the users needs.
* **Problem statement** -> a statement of the problem being addressed so we 
  can understand the intent of the pattern.
* **Solution** -> a description of how the user’s problem is being solved in an 
  understandable list of steps and perceptions.
* **Design** -> a description of the pattern’s design and in particular, the 
  user’s behavior in interacting with it
* **Implementation** -> a guide to how the pattern would be implemented
* **Illustrations** -> a visual representation of classes in the pattern (e.g. a diagram)
* **Examples** -> an implementation of the pattern in a minimal form
* **Co-requisites** -> what other patterns may be needed to support use of the 
  pattern being described?
* **Relations** -> what patterns does this pattern resemble? does it closely 
  mimic any others?
* **Known usage** -> is the pattern being used in the wild? If so, where and how?
* **Discussions** -> the team or author’s thoughts on the exciting benefits of the pattern

```
If interested in venturing down the path of writing your own design patterns I recommend 
learning from others who have already been through the process and done it well. Spend 
time absorbing the information from a number of different design pattern descriptions 
and take in what’s meaningful to you.
```

---
#### Creating new<a name="creating-new"></a>

Tips if you are creating a **new design pattern**
* How practical is the pattern?
* Keep best practices in mind
* Our design patterns should be transparent to the user
* Remember that originality is not key in pattern design
* Patterns need a strong set of examples

---
#### Anti patterns<a name="anti-patterns"></a>

```
an anti-pattern is a bad design that is worthy of documenting. 
Examples of anti-patterns in JavaScript are the following:
```
* **Polluting the global namespace** by defining a large number of variables in the global context
* **Passing strings rather than functions** to either setTimeout or setInterval
* **Modifying the Object class prototype** (this is a **particularly bad anti-pattern**)
* Using JavaScript in an **inline form** as this is inflexible
* The use of **document.write** where native DOM alternatives such as **document.createElement** are more appropriate

```
Knowledge of anti-patterns is critical for success. Once we are able to recognize 
such anti-patterns, we're able to refactor our code to negate them so 
that the overall quality of our solutions improves instantly. 
```

---
#### Categories of Design Pattern<a name="categories-of-design-pattern"></a>

##### Creational Design Patterns
```
they focus on handling object creation mechanisms where objects are 
created in a manner suitable for the situation we're working in

The basic approach to object creation might otherwise lead to 
added complexity in a project whilst these patterns aim to 
solve this problem by controlling the creation process
```

##### Structural Design Patterns
```
they are concerned with object composition and typically identify 
simple ways to realize relationships between different objects

They help ensure that when one part of a system changes, the 
entire structure of the system doesn't need to do the same
```

##### Begavioral Design Patterns
```
Behavioral patterns focus on improving or streamlining the 
communication between disparate objects in a system.
```




