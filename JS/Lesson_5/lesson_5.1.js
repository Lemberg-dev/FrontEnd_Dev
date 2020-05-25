function show (data){
    console.log(data);
}

let user ={
    firstName:'Пилип',
    lastName:'Шевченко',
    firstName:'Сергій'
}
show(user)

deleteUser('firstName', user);

show(user)
