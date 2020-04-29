let show = data => console.log(data);

// ------------ Цикл while -----------

//let a = 1, i = 0;
//while (i <= 55){
//    show(a);
//    a += 2;
//    i++;
//}

// ------------ Цикл for -----------

//for (let a = 1, i = 0; i <= 55; a += 2, i++){
//    show(a);
//}

// ------------ Цикл do/while -----------

let a = 1, i = 0;
do{
    show(a);
    a += 2;
    i++;
} while (i <= 55);
