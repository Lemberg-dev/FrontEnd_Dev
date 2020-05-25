let show = data => console.log(data);

let products = new Array(Math.floor(Math.random() * 100))
for (let i = 0; i < products.length; i++) {
    products[i] = i * Math.floor(Math.random() * 10);
}
show(products.length);
show(products);

//1. Варіант
function lastElement() {
    let a = products.length - 1;
    show(products[a]);
}
lastElement();

//2. Варіант
let x = products.length - 1;
show(products[x]);

//3. Варіант
show(products[products.length - 1]);

//4. Варіант
show(+products.slice(-1));