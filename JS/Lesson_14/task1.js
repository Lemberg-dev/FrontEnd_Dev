let show = data => console.log(data);

function clickButton() {
    let content = document.getElementById("content");
    let elementsLi = content.querySelectorAll("ul>li");
    let count = 0;
    for (let i = 0; i < elementsLi.length; i++) {
        switch (elementsLi[i]) {
            case elementsLi[0]:
                elementsLi[0].innerHTML = "Lorem ipsum dolor sit amet";
            case elementsLi[1]:
                elementsLi[1].innerHTML = "consectetur adipisicing elit";
            case elementsLi[2]:
                elementsLi[2].innerHTML = "Ut molestiae asperiores nisi saepe";
            case elementsLi[3]:
                elementsLi[3].innerHTML = "quo incidunt atque iste facere ratione";
            case elementsLi[4]:
                elementsLi[4].innerHTML = "In velit voluptate nihil";
            case elementsLi[5]:
                elementsLi[5].innerHTML = " illum placeat repellendus expedita ut facere, earum";
        }
        count += 1;
    }
    content.querySelector("p").innerHTML = `Кількість "li" в цьому блоці => ${count}`;
}


function clickOtherButton() {
    let str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Beatae nemo, nobis sapiente necessitatibus error ullam obcaecati voluptate reprehenderit consequatur enim, eum corporis rerum, eligendi velit quibusdam commodi at excepturi eaque?";
    str = str.split(",");
    let elementsOtherLi = document.getElementById("otherContent").querySelectorAll("ul>li");
    let otherCount = 0;
    for (let i = 0; i < elementsOtherLi.length; i++) {
        elementsOtherLi[i].innerHTML = str[i];
        otherCount += 1;
    }
    document.getElementById("otherContent").querySelector("p").innerHTML = `Кількість "li" в цьому блоці => ${otherCount}`
}

function count() {
    let x = document.getElementsByTagName("li");
    let i = 0;
    for (; i < x.length; i++) {
        i += 1;
    }
    document.write(`Загальна кількість "li" => ${i}`);
}
count();
