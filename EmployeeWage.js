console.log("Welcone to employee wage computation");
let empCheck;
let totalWage;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 100;
let workingDays = 1;
let totalWorkingHours = 0;
function getWorkingHours() {
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        case IS_ABSENT:
            return IS_ABSENT;
            break;
    }
}
while (workingDays <= NUM_OF_WORKING_DAYS && totalWorkingHours <= MAX_HOURS_IN_MONTH) {
    workingDays++;
    let empHrs = getWorkingHours();
    totalWorkingHours += empHrs;
}
totalWage = totalWorkingHours * WAGE_PER_HOUR;
console.log("Total wage of month is : " + totalWage );

