window.onload = function() {
    document.getElementById('passwordGenerate').addEventListener('click', getPassword);
    document.getElementById('passwordSize').addEventListener('input', setPasswordSizeText);
}

function getPassword() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/-%$#@!';

    var passwordTextElement = document.getElementById('passwordText');
    var passwordSizeInput = document.getElementById('passwordSize');

    var password = '';

    var charsLength = chars.length;

    for (var x = 0; x < passwordSizeInput.value; x++) {
        password += chars[Math.floor(Math.random() * charsLength)];
    }

    passwordTextElement.innerText = password;
}

function setPasswordSizeText() {
    var passwordSizeInput = document.getElementById('passwordSize');
    var passwordSizeText = document.getElementById('passwordSizeText');

    passwordSizeText.innerText = passwordSizeInput.value;

    getPassword();
}