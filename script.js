var generateBtn = document.querySelector("#generate");
var uppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

var conIsUpp;
var conIsLow;
var conIsNum;
var conIsSym;
var conLength = "";

function generatePassword(){
   conLength = (prompt("Select a password length between 8 and 128"));

while(conLength <= 8 || conLength >= 128){
  alert("Try again enter in a valid length");
  conLength = (prompt("Select a password length between 8 and 128"));
}
conIsUpp = confirm("Would you like to add an upper case letter");
conIsLow = confirm("Would you like to add an lower case letter");
conIsNum = confirm("Would you like to add a symbol");
conIsSym = confirm("Would you like to add a number");

while(conIsUpp === false && conIsLow === false && conIsNum === false && conIsSym === false){
  alert(" try again click ok to accept criteria");
conIsUpp = confirm("Would you like to add an upper case letter");
conIsLow = confirm("Would you like to add an lower case letter");
conIsNum = confirm("Would you like to add a symbol");
conIsSym = confirm("Would you like to add a number");

}
var passChar = [];

if(conIsUpp){
  passChar = passChar.concat(uppCase)
}
if(conIsLow){
  passChar = passChar.concat(lowCase)
}
if(conIsNum){
  passChar = passChar.concat(numChar)
}
if(conIsSym){
  passChar = passChar.concat(symChar)
}


var randomPassword = ""

for (var i = 0; i < conLength; i++) {
  randomPassword = randomPassword + passChar[Math.floor(Math.random() * passChar.length)];
  
}
return randomPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click",writePassword)
