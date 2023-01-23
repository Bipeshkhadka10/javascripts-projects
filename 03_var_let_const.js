console.log("javascript course about concept of var, let , const ")
var a = null
var b = false    // var is used to declare variables globally 
var c = "bipesh" // var can be redeclare and updated
var d = 34
console.log(a,b,c,d)

// use of let do declare variables
// some time use of var may arries error so we use let and const to declare variables
let x = null
let y = undefined
let z = "harry bhaiya"   // let can be updated but can't be redeclared
{
  let z = "i am a programmer"
  console.log(z)     // let is a bockscope means its value is fixed for a block
}
console.log(z)
console.log(typeof x, y )   // typeof is used to know the datatype used 


console.log("use of const")
const p = "bipesh"
console.log(typeof z)   // they are mostly use for declearing the constant values
// they can't be redecleared nor be updated
console.log(p)