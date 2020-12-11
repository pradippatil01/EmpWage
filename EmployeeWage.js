console.log("Welcone to employee wage computation");
let empCheck;
let totalWage;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;

function getWorkingHours() {
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_PART_TIME:
            totalWage = PART_TIME_HOURS * WAGE_PER_HOUR;
            console.log("Employee part time present and wage is: "+totalWage);
            break;
        case IS_FULL_TIME:
            totalWage = FULL_TIME_HOURS * WAGE_PER_HOUR;
            console.log("Employee part time present and wage is: "+totalWage);
            break;
        case IS_ABSENT:
            console.log("Employee is absent ");
    }
}
 getWorkingHours();