// a program in javascript using switch:
let a = 7
let b = 10
const operator = prompt("supply any arithmetic operator:");
switch(operator){
  case '+': console.log("add =", a+b );
              break;
    case '-': console.log("sub =", a-b );
              break;
    case '*': console.log("multip =", a*b );
              break;
    case '/': console.log("divide =", a/b );
              break;
    case '**': console.log( "exponential =", a**b );
              break;
    case '%': console.log("mod =", a%b );
              break;
   default: alert("unexpected or invalid operator");
    }
     