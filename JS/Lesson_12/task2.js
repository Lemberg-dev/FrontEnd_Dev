let show = data => console.log(data);
function calc(firstNumber, operation, secondNumber) {
    try {
        switch (operation) {
            default:
                return err;
            case "+":
                return firstNumber + secondNumber;
                break;
            case "-":
                return firstNumber - secondNumber;
                break;
            case "*":
                return firstNumber * secondNumber;
                break;
            case "/":
                return firstNumber / secondNumber;
                break;
        }
    } catch (err) {
        show(`Введено невірні дані - ${operation}`);
    }
}

show(calc(10, "+", 1));
show(calc(10, "-", 2));
show(calc(10, "*", 3));
show(calc(10, "/", 4));
show("\n")
show(calc(10, "=", 5));
show(calc(10, "s", 6));
