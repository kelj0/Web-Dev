## JS Notes

---
-	[Hello world](#Hello)
-	[Variables](#Variables)
-	[Input](#Input)
-	[Conditional statements](#Conditional)
-	[Loops](#Loops)
-	[Functions](#Functions)
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
```


---



