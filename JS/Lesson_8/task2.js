let show = data => console.log(data);

function SteeringWheel(steeringWheelType) {
    this.steeringWheelType = steeringWheelType;
    this.setSteeringWheel = function (data) {
        this.steeringWheelType = data;
    }
    this.getSteeringWheel = function () {
        return this.steeringWheelType;
    }
    this.horn = function () {
        show("Ваше Авто панове готове");
    }
}

function Wheels(size, color) {
    this.size = size;
    this.color = color;
}
Wheels.prototype = {
    setSize: function (data) {
        this.size = data;
    },
    setColor: function (data) {
        this.color = data;
    },
    beMatte: function () {
        show(`Колір дисків у Вашій комплектації буде матовий`);
        this.color = this.color + " matte";
    }
}

function Body(type, color) {
    this.type = type;
    this.color = color;
}
Body.prototype = {
    Cabrio: function () {
        show(`Автомобіль у Вашій комплектації буде кабріолет`);
        this.type = "Cabrio " + this.type;
    }
}

function Car(carcaseType, bodyColor, wheelsSize, wheelColor, steeringWheelType) {
    let carcase = new Body(carcaseType, bodyColor);
    let carcaseColor = new Body(carcaseType, bodyColor);
    let wheels = new Wheels(wheelsSize, wheelColor);
    let wheelsColor = new Wheels(wheelsSize, wheelColor);
    let rudder = new SteeringWheel(steeringWheelType);

    this.changeWheelsColor = function (data) {
        show(`Колір дисків у Вашій комплектації змінений на - ${data}"`);
        return wheelsColor.setColor(data);
    }
    this.changeWheelsSize = function (data) {
        show(`Розмір дисків у Вашій комплектацї змінений на - ${data}"`);
        return wheels.setSize(data);
    }
    this.changeSteeringWheel = function (data) {
        show(`Тип керма у Вашій комплектації змінений на - "${data}"`);
        return rudder.setSteeringWheel(data);
    }
    this.showCarcaseType = function () {
        show(`Тип кузова автомобіля - "${carcase.type}"`);
    }
    this.showCarcaseColor = function () {
        show(`Колір кузова автомобіля - "${carcase.color}"`);
    }
    this.showWheels = function () {
        show(`Розмір дисків - ${wheels.size}"`);
    }
    this.showRudder = function () {
        show(`Тип керма - "${rudder.getSteeringWheel()}"`);
    }
    this.showWheelsColor = function () {
        show(`Колір - "${wheelsColor.color}"`);
    }
    this.doHorn = function () {
        return rudder.horn();
    }
    this.matteWheels = function () {
        return wheelsColor.beMatte();
    }
    this.beCabrio = function () {
        return carcase.Cabrio();
    }
}

let car = new Car("Coupe", "Red", 18, "White", "Standart");

car.showWheels();
car.showRudder();
car.showWheelsColor();
car.showCarcaseType();
car.showCarcaseColor();
show("");
car.changeWheelsColor("Black");
car.changeWheelsSize(20);
car.changeSteeringWheel("Sport");
show("");
car.showWheels();
car.showRudder();
car.showWheelsColor();
car.showCarcaseType();
car.showCarcaseColor();
show("");
car.doHorn();
show("");
car.matteWheels();
car.beCabrio();
show("");
car.showWheelsColor();
car.showCarcaseType();
