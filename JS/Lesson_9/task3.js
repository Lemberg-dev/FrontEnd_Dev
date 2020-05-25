function find(arr, value) {
    if (!value) {
        return -1;
    } else {
        return arr.indexOf(value);
    }
}

let array1 = new Array(0, 1, 2, 3, 4, "fsd", "as", 5, 6, 7, 8, 9);

console.log(find(array1, 4));
find(array1, "fsd");
