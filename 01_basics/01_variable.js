const accountId=12345;
let accountEmail="xyz@123gmail.com";
var accountPassword="12345";     //do not use var:bcoz of scope problem.
// accountCity=Nainital;
let accountState;
// accountId=2;
console.log(accountId);

accountEmail="sb@sb.com";
accountPassword="321123";
// accountCity="Gurugram";

console.table([accountId,accountEmail,accountPassword,accountState]);