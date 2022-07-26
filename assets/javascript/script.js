// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Ask passwordLength
  var passwordLength = window.prompt("How many characters would you like in your password?\n*Must be at least 8 characters and no more than 128 characters*");

  // Password length requirement 
  while (passwordLength < 8 || passwordLength > 128) {
      
    // Incorrect length alert. Retry until correct
     var passwordLength = window.prompt("ERROR: Too few or too many characters. Try Again.\n*Must be at least 8 characters and no more than 128 characters*");
      if (passwordLength >= 8 || passwordLength <= 128) {
        continue;
      }
    }

  // Array to hold all possible characters in user password
  var masterString = []

  // Ask lowercase characters
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";

  // Split to separate lowerChars string into one array
  lowerCharsSplit = lowerChars.split('');
  askLower = window.confirm("Press OK if you would like lowercase characters in your password.");

    // If "OK" pressed, add array to masterString array
    if (askLower) {
      masterString.push(lowerCharsSplit)
    }

  // Ask uppercase characters
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  upperCharsSplit = upperChars.split('');
  askUpper = window.confirm("Press OK if you would like uppercase characters in your password.");
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
    if (askSpecial) {
      masterString.push(specialCharsSplit)
    }

  // Concatenates all arrays in masterString into one array
  masterString = masterString.flat()

  var password = generatePassword(passwordLength, masterString);

  }

  // Selecting from masterString's possible characters 
  function generatePassword(passwordLength, masterString) {

    var result = ""

    // For loop itterating random character selection until password length met
    for (let i=0; i < passwordLength; i++) {
       var charIndex = (Math.floor(Math.random() * masterString.length))
       result += masterString[charIndex]
    }
    
  var passwordText = document.querySelector("#password");
  passwordText.value = result;
  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
