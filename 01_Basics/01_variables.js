const account_id = 144553
let account_email = "cetariqfarooq@gmail.com"
var account_password = "12345"
account_city = "SGD"
// account_id= 3569 // not allowed
console.log(account_id);
console.log(account_email);
console.log(account_password);
console.log(account_city);
let account_state;

account_email = "cstariqfarooq@gmail.com"
// console.log(account_email);

console.table([account_id, account_email, account_password, account_city])
/*
prefered not ti use var for variable
var is not used due to block scope and functional scope issues
in JS, is a variable is declared only without assigning any value then it will be shown as Undefined
*/