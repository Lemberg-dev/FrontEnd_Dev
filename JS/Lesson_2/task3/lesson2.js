var login = prompt("Who is here?", "");
var password = prompt("Password", "");

switch (login) {
    case "Admin":

        switch (password) {
            case "TheMaster":
                alert("Welcome!");
                break;
            case null:
                alert("Canceled");
                break;
            default:
                alert("Wrong Password");
        }
        break;
    case null:
        alert("Canceled");
    default:
        alert("I dont`t know you");
}
