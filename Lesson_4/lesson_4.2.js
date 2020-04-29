let show = data => console.log(data);
let num1 = +prompt("Введіть ,будь ласка, першу цифру");
let num2 = +prompt("Введіть ,будь ласка, другу цифру");
if (Math.abs(num1 - 10) < Math.abs(num2 - 10)) {
    show(`Цифра ${num1} ближче до "10" ніж цифра ${num2}`);
} else if (Math.abs(num1 - 10) == Math.abs(num2 - 10)) {
    show(`Цифра ${num1} і цифра ${num2} рівновіддалена від "10"`);
} else {
    show(`Цифра ${num2} ближче до "10" ніж цифра ${num1}`);
}
