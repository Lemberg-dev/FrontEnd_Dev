var login = prompt("Who is Here?", "");

if (login = "Admin") {

    var password = prompt("Password", "");

    if (password = "TheMaster") {
        alert("Welcome!");
    } else if (password = null) {
        alert("Canceled");
    } else {
        alert("Wrong Password");
    }

} else if (login = null) {
    alert("Canceled");

} else {

    alert("I dont`t know you");
}
