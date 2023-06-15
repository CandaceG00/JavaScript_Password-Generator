let characterLength = 8;
let choiceArr = [];

let specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '/', '<', '>', '[', ']', '{', '}', '?'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    let correctPrompts = getPrompts();
    let passwordText = document.querySelector("#password");

    if (correctPrompts) {
      let newPassword = generatePassword();
      passwordText.value = newPassword;
    } else {
      passwordText.value = "";
    }
}

function generatePassword () {
  let password = "";
  for(let i = 0; i < characterLength; i++) {
    let randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
} 

function getPrompts () {
  choiceArr = [];
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert ("Character length has to be a number between 8 - 128 digits. Please try again.");
    return false;
}

if (confirm("Would you like lowercase letters in your password?")) {
  choiceArr = choiceArr.concat(lowerCase);
}

if (confirm("Would you like uppercase letters in your password?")) {
  choiceArr = choiceArr.concat(upperCase);  
}

if (confirm("Would you like special characters in your password?")) {
  choiceArr = choiceArr.concat(specialCharacter); 
}

if (confirm("Would you like numbers in your password?")) {
  choiceArr = choiceArr.concat(numberArr); 
}
return true;
}
