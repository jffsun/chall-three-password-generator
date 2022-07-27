// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Default password to not include lowercase, uppercase, numeric, or special characters
  var includeLower = false;
  var includeUpper = false;
  var includeNum = false;
  var includeSpecial = false;

  // Ask password length
  var passwordLength = window.prompt("How many characters would you like in your password?\n*Must be at least 8 characters and no more than 128 characters*");

  // Password length requirement 
  while (passwordLength < 8 || passwordLength > 128) {
      
    // Incorrect length alert that retries until correct
     var passwordLength = window.prompt("ERROR: Too few or too many characters. Try Again.\n*Must be at least 8 characters and no more than 128 characters*");
      if (passwordLength >= 8 || passwordLength <= 128) {
        continue;
      }}
  
  console.log(passwordLength)
  // Continue to ask prompts if user declines all prompts
  while (true) {

    // // Ask lowercase characters
    askLower = window.confirm("Press OK if you would like lowercase characters in your password.");

    // Ask uppercase characters
    askUpper = window.confirm("Press OK if you would like uppercase characters in your password.");

    // Ask numeric characters
    askNum = window.confirm("Press OK if you would like numeric characters in your password.");

    // Ask special characters
    askSpecial = window.confirm("Press OK if you would like special characters in your password.");

    // If any prompts are answered then break out of prompts
    if (askLower || askUpper || askNum || askSpecial) {
      break;
    }
  }

  // All possible characters to select from
  allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  // Split list of characters string into elements in array
  possibleChars = allChars.split('');
  var result = []

  // While loop to add characters until password length is met
  let i = 0
  while (i < passwordLength) {

    // If user clicked "Ok" to lowercase prompt
    if (askLower) {

      // Pick a random lowercase character from possible chracters
      lowerLow = 0;
      lowerHigh = 26;
      lowerChar = possibleChars[(Math.floor(Math.random() * (lowerHigh - lowerLow)))];

      // Add lowercase character to result array
      result.push(lowerChar);

      // Increment i as each character is added to the password
      i++;
    }

    // If user clicked "Ok" to uppercase prompt
    if (askUpper) {
      upperLow = 26;
      upperHigh = 52;

      // Pick a random uppercase character from possible chracters
      upperChar = possibleChars[(Math.floor(Math.random() * (upperHigh - upperLow))) + upperLow];
      result.push(upperChar);
      i++;
    }

    // If user clicked "Ok" to numeric character prompt
    if (askNum) {
      numLow = 52;
      numHigh = 62;

      // Pick a random numeric character from possible chracters
      numChar = possibleChars[(Math.floor(Math.random() * (numHigh - numLow))) + numLow];
      result.push(numChar);
      i++;
    }

    // If user clicked "Ok" to special character prompt
    if (askSpecial) {
      specialLow = 62;
      specialHigh = 73;

      // Pick a random special character from possible chracters
      specialChar = possibleChars[(Math.floor(Math.random() * (specialHigh - specialLow))) + specialLow];
      result.push(specialChar);
      i++;
    }
  }
  
  // Randomize order of characters in password
  result = result.sort(() => Math.random() - 0.5);

  // Concatenates elements inside result array into string
  result = result.join('');
  return result;
  
}

function generatePassword() {

    var pw = writePassword();
    var passwordText = document.querySelector("#password");

    // Display generated password to the text area
    passwordText.value = pw;
};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);