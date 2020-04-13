function generatePassword() {
  var lengthOfPwd = prompt(
    "Please enter password length between 8 and 128 characters"
  );
  if (lengthOfPwd < 8 || lengthOfPwd > 128) {
    alert("Please enter password length between 8 and 128 characters");
  } else {
    var lowercaseLetters = confirm(
      "Click Confirm if you want to include lowercase characters in your password"
    );

    var uppercaseLetters = confirm(
      "Click Confirm if you want to include uperCase characters in your password"
    );

    var numbersDigits = confirm(
      "Click Confirm if you want to include numbers in your password"
    );

    var specialCharacters = confirm(
      "Click Confirm if you want special characters in your password"
    );

    var pattern = "";
    var lowerCase = "abcdefghijknopqrstuvwxyz";
    var upperCase = "ACDEFGHJKLMNPQRSTUVWXYZ";
    var numbers = "12345679";
    var speChar = "!@#$+-*&_";
    var result = "";

    if (lowercaseLetters) {
      result = lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
      pattern = pattern.concat(lowerCase);
    }
    if (uppercaseLetters) {
      result = result.concat(
        upperCase.charAt(Math.floor(Math.random() * upperCase.length))
      );
      pattern = pattern.concat(upperCase);
    }
    if (numbersDigits) {
      result = result.concat(
        numbers.charAt(Math.floor(Math.random() * numbers.length))
      );
      pattern = pattern.concat(numbers);
    }
    if (specialCharacters) {
      result = result.concat(
        speChar.charAt(Math.floor(Math.random() * speChar.length))
      );
      pattern = pattern.concat(speChar);
    }

    var n = pattern.length;
    var loopCount = lengthOfPwd - result.length;

    for (var i = 0; i < loopCount; i++) {
      result = result.concat(pattern.charAt(Math.floor(Math.random() * n)));
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = result;
  }
}
