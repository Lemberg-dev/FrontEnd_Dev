let show = data => console.log(data);

let array1 = new Array(0, 1, 2, 3, 4, "fsd", "as", 5, 6, 7, 8, 9);

function filterRange(array, a, b) {
    let oldArray = array.slice(a, b);

    function test(oldArray) {
        let newArray = [];
        for (let i = 0; i < oldArray.length; i++) {
            if (typeof oldArray[i] != "number") {
                continue;
            }
            newArray.push(oldArray[i]);
        }
        return newArray;
    }
    return test(oldArray);
}

filterRange(array1, 3, 10);
