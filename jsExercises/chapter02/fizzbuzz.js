for(let n = 1; n<100;n++){
  if(n%3==0 && n%5==0)
    console.log("FizzBuzz");
  else if(n%3==0)
    console.log("Fizz");
  else if(n%5==0)
    console.log("Buzz");
  else
    console.log(n);
}

/* Outputs
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
...
*/