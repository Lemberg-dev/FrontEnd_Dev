const show = data => console.log(data);
// Створити масив.
let array = [];
// Наповнити його 5-ма об`єктами Student {name, sex(male\female), age};
array.push({
    name: "Oleh",
    sex: "male",
    age: 27
});
array.push({
    name: "Andryi",
    sex: "male",
    age: 16
});
array.push({
    name: "Victoria",
    sex: "female",
    age: 24
});
array.push({
    name: "Ludmila",
    sex: "female",
    age: 22
});
array.push({
    name: "Tanya",
    sex: "female",
    age: 18
});
array.forEach(show); // Перевіряємо
show("\n");
// Зробити фільтрування обєктів використовуючи filter() , де age < 21, sex ==`male`;
let someFilter = array.filter(function (value) {
    if (value.age < 21 && value.sex == "male") {
        return value;
    }
});
someFilter.forEach(show); // Перевіряємо
show("\n");
// До кожного із відфільтрованих обєктів застосувати функцію map() та записати, в нове поле ’yearsUnderAge’ обєкта, різницю 21 - age.
someFilter.map(function (value) {
    let x = 21 - value.age;
    value.yearsUnderAge = x;
    show(value)
});
show("\n");
// Провести сортування за всіма полями об’єкта де перше поле, за яким слід сортувати, буде age далі, 
// якщо у них однаковий вік, тоді слід сортувати за полем name. 
function mySort(obj1, obj2) {
    if (obj1.age == obj2.age) {
        let nameA = obj1.name.toLowerCase();
        let nameB = obj2.name.toLowerCase();
        if (nameA > nameB) {
            return 1;
        } else if (nameA < nameB) {
            return -1;
        }
    }
    return obj1.age - obj2.age;
}

array.sort(mySort);
array.forEach(show); // Перевіряємо
