var characterLength = 8;
var choiceArr = [];

var specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '/', '<', '>', '[', ']', '{', '}', '?'];
var lowerCase = [];
var upperCase = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword () {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
