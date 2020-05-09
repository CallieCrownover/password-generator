// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialChar = [ "!", "@", "#","$", "%", "^", "&", "*", "?", ">", "<", ".", ";", ":"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


function generatePassword(){
    var genPass = "";

    function randomNumber(x) {
        return (Math.floor(Math.random() * x));
    }


    var numCharacters = prompt("How many characters do you want in your password? It can be between 8-100.");
        console.log("Number of Characters: " + numCharacters);

        if (numCharacters < 8 || numCharacters > 100){
            alert("You must choose between 8 and 100 characters, bozo!")
                var numCharacters = prompt("How many characters do you want in your password? It can be between 8-100.");
                
    }


    var upperCase = confirm("Do you want lower case letters in your password?")
        console.log("Use uppercase letters: " + upperCase );
    
    var numbers = confirm("Do you want numbers in your password?");
        console.log("Use numbers: " + numbers)

    var specialChar =  confirm("Do you want special characters in your password?");
        console.log("Use special characters: " + specialChar)

    for( i=0; i<numCharacters; i++ ){

        var selectChar = chooseChar[randomNumber(5)];
        console.log(selectChar)

        if (lowerCase && selecrChar === "lower"){
            var nextChar = letter[randomNumber(20)];
            genPass = genPass + nextChar;
        }

        else if (upperCase && selectChar === "upper"){
            var nextChar = upperLetter[randomNumber(20)];
            genPass = genPass + nextChar;
        }

        else if (specialChar && selectChar === "special"){
            var nextChar = specialChar[randomNumber(specialChar.length)];
            genPass = genPass + nextChar;
        }

        else {
            i=i-1
        }
        console.log(genPass)

    }

    return genPass;
}