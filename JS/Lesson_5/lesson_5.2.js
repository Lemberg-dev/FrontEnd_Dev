let EmployeeSalaries = {};
EmployeeSalaries.worker1 = 12500;
EmployeeSalaries.worker2 = 17000;
EmployeeSalaries.worker3 = 15000;
EmployeeSalaries.worker4 = 13100;

function total(){
    let sum = 0;
    for (let key in EmployeeSalaries){
        sum += EmployeeSalaries[key];
    }
    return sum;
        if (!sum){
        return 0;
    }
}

total();
