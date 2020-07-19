let show = data => console.log(data);

function getMethod() {
    let userData = {
        fName: document.getElementById("getMethodName").value,
        lName: document.getElementById("getMethodSurname").value,
        age: document.getElementById("getMethodAge").value,
        address: document.getElementById("getMethodAddress").value
    };
    if ((userData.age > 100 || userData.age < 1) || isNaN(userData.age)) {
        let age = document.getElementById("getMethodAge");
        age.value = "Error";
        age.style.background = "red";
        age.focus();
    } else {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "/formGet?fName=" + userData.fName +
            "&lName=" + userData.lName +
            "&age=" + userData.age +
            "&address=" + userData.address);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send();
    }
}

function postMethod() {
    let userData = {
        fName: document.getElementById("postMethodName").value,
        lName: document.getElementById("postMethodSurname").value,
        age: document.getElementById("postMethodAge").value,
        address: document.getElementById("postMethodAddress").value
    };
    if ((userData.age > 100 || userData.age < 1) || isNaN(userData.age)) {
        let age = document.getElementById("postMethodAge");
        age.value = "Error";
        age.style.background = "red";
        age.focus();
    } else {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/formPost");
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(userData));
    }

}
