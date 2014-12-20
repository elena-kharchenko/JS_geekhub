function check_email(email) {
    reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!email.match(reg)) document.getElementById("e_email").style.display = "inline";
    else document.getElementById("e_email").style.display = "none";
}
function check_password(password) {
    if (password.length < 4 || password.length > 25) document.getElementById("e_password").style.display = "inline";
    else document.getElementById("e_password").style.display = "none";
}