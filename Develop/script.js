// Assignment code here

// all the variables with things to call
var upper_var = ["A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
  "T", "U", "V", "W", "X", "Y", "Z"];
var lower_var = ["a", "b", "c", "d", "e", "f", "g", "h",
  "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
  "t", "u", "v", "w", "x", "y", "z"];
var num_var = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special_var = ["!", "?", "@", "#", "%", "$", "&"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // types of characters to include:
  var length_prompt = prompt("Please enter your password length: ", "8");
  // would you like to include uppercase letters?
  var uppercase = confirm("Do you want uppercase letters?");
  // would you like to include lowercase letters?
  var lowercase = confirm("Do you want lowercase letters?");
  // would you like to include numbers?
  var numbers = confirm("Do you want numbers?");
  // would you like to include special characters?
  var specials = confirm("Do you want special characters?")


  if (length_prompt < 8 || length_prompt > 128) {

    return (alert("Not a good length."));
  }
  else if (length_prompt === false) {
    return (alert("You canceled the process. Please click the button again to restart the process."));
  }
  else {
    console.log("That's a good length.");
  }

  // uppercase if statement
  if (uppercase === true) {
    console.log("Uppercase has been added.");
  }
  else {
    console.log("No uppercase.");
  }

  // lowercase if statement

  if (lowercase === true) {
    console.log("lowercase has been added.");
  }
  else {
    console.log("No lowercase.");
  }

  // if statement for numbers
  if (numbers === true) {
    console.log("Numbers have been added.");
  }
  else {
    console.log("No numbers.");
  }

  // if statement for special characters
  if (specials === true) {
    console.log("Include special characters");
  }
  else {
    console.log("No special characters.");
  }



  // if statement for if none of the options are selected
  if ((lowercase === false) && (uppercase === false) && (numbers === false) && (specials === false)) {
    return (alert("Not enough info."));
  }

  var password = generatePassword(length_prompt, uppercase, lowercase, numbers, specials);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to generate the password
function generatePassword(length, upper, lower, num, spec) {

  var pass_array = [];
  for (i = 0; i < length; i++) {

    var found_char = false;
    while (found_char === false) {

      var choice = Math.floor(Math.random() * 4);
      console.log("Choice: " + choice);
      switch (choice) {

        case 0:
          if (upper === true) {
            pass_array[i] = upper_var[Math.floor(Math.random() * upper_var.length) ];
            found_char = true;
          }
          break;

        case 1:
          if (lower === true) {
            pass_array[i] = lower_var[Math.floor(Math.random() * lower_var.length) ];
            found_char = true;
          }
          break;

        case 2:
          if (num === true) {
            pass_array[i] = num_var[Math.floor(Math.random() * num_var.length) ];
            found_char = true;
          }
          break;

        case 3:
          if (spec === true) {
            pass_array[i] = special_var[Math.floor(Math.random() * special_var.length) ];
            found_char = true;
          }
          break;

        default:
          console.log("never be here.");

      }
      console.log("i= " + i);
      console.log(pass_array);
    }

  }
  return pass_array.join("");

}
