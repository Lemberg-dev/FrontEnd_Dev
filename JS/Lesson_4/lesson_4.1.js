let show = data => console.log(data);
let num = +prompt(" Please enter a number");
if (num === 0) {
    show("null");
} else if (num % 2 == 0) {
    show("The number is paired");
} else {
    show("The number is unpaired");
}
