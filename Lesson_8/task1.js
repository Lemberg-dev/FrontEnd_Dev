let show = data => console.log(data);

function EmployeeFixed(name, salary) {
    this.name = name;
    this.salary = salary;
}

function EmployeeHourly(name, hourlyRate, earnedHours) {
    this.name = name;
    this.hourlyRate = hourlyRate;
    this.earnedHours = earnedHours;
}

EmployeeHourly.prototype = new EmployeeFixed();

EmployeeFixed.prototype.getYearSalary = function () {
    show(this.salary * 12);
}
EmployeeHourly.prototype.getYearSalary = function () {
    show((this.hourlyRate * this.earnedHours) * 12);
}

let employeeFixed = new EmployeeFixed("Олег", 26000);
let employeeHourly = new EmployeeHourly("Андрій", 250, 480);

employeeFixed.getYearSalary();
employeeHourly.getYearSalary();
