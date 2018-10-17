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

