let show = data => console.log(data);

function Person(name, age){
    this.name = name;
    this.age = age;
}

let Andriy = new Person("Andriy", 33);
let Petro = new Person("Petro", 22);
let Oksana = new Person("Oksana", 28);
let Victoria = new Person("Victoria", 18);
let Oleh = new Person("Oleh", 25);

let myMap = new Map([
    ["Andriy", Andriy],
    ["Petro", Petro],
    ["Oksana", Oksana],
    ["Victoria", Victoria],
    ["Oleh", Oleh]
]);

function myFn(map){
    for(let key of map.keys()){
        show(`name: ${map.get(key).name}, age: ${map.get(key).age}`);
    }
}

myFn(myMap);
