/*
Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the 
grid there is either a space or a "#" character. The characters should
form a chessboard.

Passing this string to console.log should show something like this:
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
*/

let board = "";
let siz = Number(prompt("Enter board size"));
let t = siz;
for(let n=0;n<siz*siz-1;n++){
  if(n==t){
    board+="\n";
    t=t+siz+1;
  }
  else if(n%2==1)
    board+="#";
  else
    board+=" ";
}
console.log(board);

/*
Input = 6
Output:
 # # #
# # # 
 # # #
# # # 
 # # #

Input = 8
Output:
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
*/

