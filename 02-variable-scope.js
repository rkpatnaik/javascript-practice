/*
    'var' is function-scoped, meaning the variable exists only within the function it is declared in.
    So, console.log() inside the function works fine and prints the message.
    However, trying to access 'message' outside the function results in:
    ReferenceError: message is not defined
*/

function printName() {
    var message = "Ranjan";
    console.log(message);
}
printName();                //prints "Ranjan"
//console.log(message);       //Still gives ReferenceError