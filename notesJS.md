## JS Notes

---
-	[Hello world](#Hello)
-	[Variables](#Variables)
-	[Input](#Input)
-	[Conditional statements](#Conditional)
-	[Loops](#Loops)
-	[Functions](#Functions)
-	[Data Structures])(#Data)
---

#### Hello world<a name="Hello"></a>
```js
console.log("Hello world!");
```

---
#### Variables<a name="Variables"></a>
```js
let hello = "Hello world!";
console.log(hello);
```

---
#### Input<a name="Input"></a>
```js
let word = prompt("Write something and il print it");
console.log(word);
```

---
#### Conditional statements<a name="Conditional"></a>
```js
let theNumber = Number(prompt("Pick a number");
if(!Number.isNaN(theNumber)){
	console.log("Your number is " +  theNumber);
} else{
	console.log("Hey why you didnt write number?");
}
```

```js
let num = Number(prompt("Pick a number"));
if (num < 10) {
	console.log("Small");
} else if (num < 100) {
	console.log("Medium");
} else {
	console.log("Large");
}
```

```js
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
#### Loops<a name="Loops"></a>

**while**
```js
let result = 1;
let counter = 0;
while (counter < 10) {
	result = result * 2;
	counter = counter + 1;
}
console.log(result);
// 1024
```

**do while**
```js
let yourName;
do {
	yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
// prompts and loops until you input some "name"
```

**for**
```js
for(let number = 0 ; number <= 12; number = number+2) {
	console.log(number);
}
// 0
// 2
// ..
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
#### Functions<a name="Functions"></a>

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
```
```js
// Assigning default to value
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
#### Data structures<a name="#Data"></a>

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
 Array loops
*/
for(let i of [1,2,3,4])
	console.log(entry);
// this is like "for i in [1,2,3,4]" in python

/*-----------
 Slicing
*/
console.log([0, 1, 2, 3, 4].slice(2, 4));
// [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// [2, 3, 4]

// "Unpacking list"
let words = ["never", "fully"];
console.log(["will", words, "understand"]);
// ["will", ["never", "fully"], "understand"]

console.log(["will", ...words, "understand"]);
// ["will", "never", "fully", "understand"]
```

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
