let show = data => console.log(data);

let a = +prompt(`Цифра "a"`);
let b = +prompt(`Цифра "b"`);
let c = +prompt(`Цифра "c"`);
let d = b * b - 4 * a * c;
let x1, x2;
if (d == 0){
    x1 = (-b) / (2 * a);
    x2 = x1;
    show(`x1 і x2 рівні ${x1}`);
} else if (d > 0){
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    show(`x1 дорівнює ${x1} \nx2 дорівнює ${x2}`);
} else{
    show(`Дискримінант менше нуля (d < 0)`);
}
