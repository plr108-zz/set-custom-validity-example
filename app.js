var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

submit.onclick = function() {
    var customValidityString1 = "";
    var customValidityString2 = "";


    if (firstPasswordInput.value !== secondPasswordInput.value) {
        customValidityString2 += "The passwords do not match\n";
    } else {

        var password = firstPasswordInput.value;

        if (password.length < 16) {
            customValidityString1 += "The password must be at least 16 characters\n";
        }

        if (password.length > 100) {
            customValidityString1 += "The password must be less than 100 characters\n";
        }

        var symbols = /[!@#$%^&*]/;
        if (!password.match(symbols)) {
            customValidityString1 += "At least one of these symbols is required: !, @, #, $, %, ^, &, *\n";
        }

        var numbers = /\d/g;
        if (!password.match(numbers)) {
            customValidityString1 += "At least one number is required\n";
        }

        var lowercase = /[a-z]/g;
        if (!password.match(lowercase)) {
            customValidityString1 += "At least one lowercase letter is required\n";
        }

        var uppercase = /[A-Z]/g;
        if (!password.match(uppercase)) {
            customValidityString1 += "At least one uppercase letter is required\n";
        }

        var notValidChars = /[^A-z0-9\!\@\#\$\%\^\&\*]/g;
        if (password.match(notValidChars)) {
            customValidityString1 += "The password contains an illegal character";
        }
    }

    firstPasswordInput.setCustomValidity(customValidityString1);
    secondPasswordInput.setCustomValidity(customValidityString2);

    if (customValidityString1.length === 0 && customValidityString2.length === 0) {
        alert("Password change successful!");
    }
};
