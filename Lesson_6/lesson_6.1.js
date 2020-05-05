/*function checkAge(){
    let age = +prompt("Your age?");
    let check = age > 18 ? true : confirm('Do You have permission?');
    return check;
}
*/
function checkAge(){
    let age = +prompt("Your age?");
    let check = age > 18 || confirm('Do You have permission?');
    return check;
}

checkAge();
