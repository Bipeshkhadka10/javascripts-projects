// conditional expressions in js.

let age = prompt("what is your age?")
if (age>0&&age<12)
{
     alert("you are a kid");
}
else if (age>=12 && age<=18 )
{
     alert("you are a tenneger");
}
else if (age>=19 && age<=40)
{
     alert("you are a Adult");
}
else 
{
     alert("you are a oldage");
}
console.log("done")

// ternary operator example:
console.log( age>18? 'can drive':'can not drive')