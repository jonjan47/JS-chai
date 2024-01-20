const accountId = 1234
let accountEmail = "gujjar@gamil.com"
var accountPassword = "2344"
accountCity = "sahiwal"
/*
parfar not to use var because its scope level issuse
*/
// accountId = 77
// console.log(accountId); const variable is not change
accountEmail = "ali@gamil.com"
accountPassword = "0987"
accountCity = "lahore"

console.table([accountEmail, accountPassword, accountCity]);