let show = data => console.log(data);

function Robot (name, work){
    this.name = "Robot";
    this.work = "Я Robot – я  працюю";
}
Robot.prototype.getWork = function(){
    show(this.work);
}
Robot.prototype.setName = function(newName){
    this.name = newName;
}
Robot.prototype.setWork = function(newWork){
    this.work = newWork;
}

function CoffeRobot (){
    this.name = "CoffeRobot";
}
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;


function RobotDancer (){
    this.work = "Я RobotDancer – я  танцюю";
}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;

function RobotCoocker (){}
RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;

let myRobot = new Robot;

let myCoffeRobot = new CoffeRobot;
myCoffeRobot.setWork("Я CoffeRobot – я варю каву");

let myRobotDancer = new RobotDancer;
myRobotDancer.setName("RobotDancer");

let myRobotCoocker = new RobotCoocker;
myRobotCoocker.setName("RobotCoocker");
myRobotCoocker.setWork("Я RobotCoocker – я  готую");

myRobot.getWork();
myCoffeRobot.getWork();
myRobotDancer.getWork();
myRobotCoocker.getWork();

show("");

let myRobots = [myRobot, myCoffeRobot, myRobotDancer, myRobotCoocker];
for (let item in myRobots){
    show(myRobots[item].getWork());
}

