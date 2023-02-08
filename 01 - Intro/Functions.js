function addTwo(num) {
  return num + 2;
}
addTwo(5);
// ===================================================================================
function getUpper(value) {
  return value.toUpperCase();
}
getUpper('Twinkle');
// ===================================================================================
function signUpUser(name, email, password) {}
signUpUser('Twinkle', 'art.twis@gmail.com', true);
// ===================================================================================
var loginUser = function (name, email, isPaid) {
  if (isPaid === void 0) {
    isPaid = false;
  }
};
loginUser('h', 'h.com');
// ===================================================================================
function addFive(num) {
  return num + 5;
}
var result = addFive(10);
// ===================================================================================
function getValue(num) {
  if (num > 5) {
    return true;
  }
  return '401 Error';
} // we can do that assign multiple type to return value
// ===================================================================================
var getMessage = function (s) {
  return '';
};
// ===================================================================================
var heros = ['thor', 'spiderman', 'ironman'];
heros.map(function (hero) {
  return 'Hero is '.concat(hero);
});
// ===================================================================================
function consoleError(errMsg) {
  console.log(errMsg);
}
// ===================================================================================
function handleError(errMsg) {
  throw new Error(errMsg);
}
