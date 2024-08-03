const accountId = 144553
let accountEmail = "akhshan@gmail.com"
var accountPassward = "12345"
accountCity = "Budaun"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ak@ak.com"
accountPassward = "21212121"
accountCity = "Gaya"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassward, accountCity, accountState])