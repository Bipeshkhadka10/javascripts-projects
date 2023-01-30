// program of for loop:
let sum = 0;
let n = prompt("enter the number");  // it take input in string
n = Number.parseInt(n);
for(let i=1; i<n; i++)
{
     sum += i;

}
console.log("the sum of " +n+ "natural number is " +sum);
//console.log(i)    here variable is declared by let which is bock scope