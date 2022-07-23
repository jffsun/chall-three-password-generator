// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

// Ask length password
var passwordLength = window.prompt("How many characters would you like in your password?\n*Must be at least 8 characters and no more than 128 characters*");
  
  // Password length requirement 
  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be at least 8 characters and no more than 128 characters.");
    var askLength = window.prompt("How many characters would you like in your password?\n*Must be at least 8 characters and no more than 128 characters*");
  }


  var masterString = []

  // Ask lowercase characters
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  lowerCharsSplit = lowerChars.split('');
  askLower = window.confirm("Press OK if you would like lower characters in your password.");
    if (askLower) {
      masterString.push(lowerCharsSplit)
      console.log("test")
    }

  // Ask uppercase characters
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  upperCharsSplit = upperChars.split('');
  askUpper = window.confirm("Press OK if you would like upper characters in your password.");
    if (askUpper) {
      masterString.push(upperCharsSplit)
    }

  // Ask numeric characters
  var numChars = "0123456789";
  numCharsSplit = numChars.split('');
  askNum = window.confirm("Press OK if you would like numeric characters in your password.");
    if (askNum) {
      masterString.push(numCharsSplit)
    }

  // Ask special characters
  var specialChars = "!@#$%^&*()"
  specialCharsSplit = specialChars.split('');
  askSpecial = window.confirm("Press OK if you would like special characters in your password.");
    if (askNum) {
      masterString.push(specialCharsSplit)
    }

  masterString = masterString.flat()

  var password = generatePassword(passwordLength, masterString);

  }
  // var Password = generatePassword function

  function generatePassword(passwordLength, masterString) {

    var result = ""

    for (let i=0; i < passwordLength; i++) {
       var charIndex = (Math.floor(Math.random() * masterString.length))
       result += masterString[charIndex]
    }
    
    
  var passwordText = document.querySelector("#password");

  passwordText.value = result;

  // Return password
  

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
