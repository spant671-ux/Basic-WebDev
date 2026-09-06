// Use 'const' to declare variables that should not be re-assigned. Trying to re-assign a const will throw a TypeError.
const accountId = 144553;

// Use 'let' to declare block-scoped variables that can be re-assigned.
let accountEmail = "santoshpant@gmail.com";

// 'var' is older, function-scoped keyword. It does not respect block scopes (like inside if-statements or loops).
var accountPassword = "12345";

// Declaring variables without let/const/var is possible but highly discouraged as it creates implicit global variables.
accountCity = "Pithoragarh";

// Variables declared without initial values are assigned 'undefined' automatically.
let accountState;

// Error: Assignment to constant variable.
// accountId = 2;
console.log(accountId);

// Re-assigning let, var, and implicit global variables is allowed.
accountEmail = "sp@sp.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

/*
Note: Prefer not to use 'var' because of issues in block scope and functional scope.
Variables declared with 'var' can leak out of blocks (like if/loops), causing potential bugs.
Always use 'const' by default, and 'let' if you know the variable needs to be re-assigned.
*/

// console.table() allows printing multiple variables/objects in a clean, readable tabular format.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);