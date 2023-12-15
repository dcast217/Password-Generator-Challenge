// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let userInput = prompt("Please enter your name:");
console.log("Hello, " + userInput + "!");
const passwordDisplay = document.getElementById('password');

generateBtn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  const length = prompt("Enter the desired password length (between 8 and 128 characters):");

  // Validate the length input
  if (length < 8 || length > 128) {
    alert("Invalid password length! Please enter a number between 8 and 128.");
    return;
  }

  const includeLowercase = confirm("Include lowercase characters?");
  const includeUppercase = confirm("Include uppercase characters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return;
  }

  let characters = '';
  if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
  if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeNumeric) characters += '0123456789';
  if (includeSpecial) characters += '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
  
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordDisplay.value = password;
}

