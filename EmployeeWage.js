console.log("Welcone to employee wage computation");
let empCheck;
let empWorkPeriod;
let totalWage;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
empCheck = Math.floor(Math.random() * 10) % 2;
checkEmployeeStatus(empCheck);

/* check employee status */
function checkEmployeeStatus(empCheck) {
    if (empCheck == 1) {
        calDailyWage();
    }
    else {
        console.log("employee is Absent");
    }
}

function calDailyWage() {
    empWorkPeriod = Math.floor(Math.random() * 10) % 2;
    if (empWorkPeriod == IS_FULL_TIME) {
        totalWage = FULL_TIME_HOURS * WAGE_PER_HOUR;
        console.log("employee full time present and wage : " + totalWage);
    }
    if (empWorkPeriod == IS_PART_TIME) {
        totalWage = PART_TIME_HOURS * WAGE_PER_HOUR;
        console.log("employee part time present and wage : " + totalWage);
    }
}

