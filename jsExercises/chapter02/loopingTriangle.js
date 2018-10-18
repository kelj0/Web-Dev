/*
Write a loop that makes seven calls to console.log to 
output the following triangle:
#
##
###
####
#####
######
#######
*/

let a = "#";
for(let b = a;b.length<8;b+=a)
	console.log(b);

/*Outputs
#
##
###
####
#####
######
#######
*/