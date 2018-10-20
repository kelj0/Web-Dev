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
---

### Hello world<a name="Hello"></a>
```js
console.log("Hello world!");
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
**do while**
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

============================
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
