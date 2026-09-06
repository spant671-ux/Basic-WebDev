// ==================== Control Flow: Switch Statement ====================

/*
Switch Statement Syntax:
switch (key) {
    case value1:
        // Code to execute if key === value1
        break;
    case value2:
        // Code to execute if key === value2
        break;
    default:
        // Code to execute if no cases match key
        break;
}
*/

// Target value to evaluate:
const month = 3;

// The switch statement compares the key (month) strictly (===) against each case value.
switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        // Matched! Expected Output: "March"
        console.log("March");
        // CRITICAL NOTE: 'break' prevents fall-through behavior!
        // Without 'break', JS continues executing all subsequent case blocks (except default) regardless of match.
        break;

    case 4:
        console.log("April");
        break;

    default:
        // Executed if no preceding case matches the key value
        console.log("default case match");
        break;
}