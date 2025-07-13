/*
    JavaScript switch Statement
    It is a cleaner alternative to writing multiple 'if...else if' conditions — especially when checking the same variable against different values.
*/

let day = "Wednesday";

switch(day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend is near");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Just another day");
}

/* 
    'break' prevents fall-through to the next case
    If there is no 'break', it runs all cases after a match
*/
let result = "passed";

switch(result) {
    case "passed":
        console.log("Test run was successful");
    case "failed":
        console.log("Test run was not successful");
    case "pending":
        console.log("Test run is in progress");
        break;
    default:
        console.log("No test run");
}