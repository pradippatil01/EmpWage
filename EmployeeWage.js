console.log("Welcone to employee wage computation");
let empCheck;
var totalWage = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 100;
var totalWorkingDays = 0;
var totalWorkingHours = 0;
var empDailyWageArr = new Array();
/* get employee status */
getWorkingHours = () => {
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
/* calculate for month */
main = () => {
    while (totalWorkingDays < NUM_OF_WORKING_DAYS && totalWorkingHours <= MAX_HOURS_IN_MONTH) {
        totalWorkingDays++;
        let empHrs = getWorkingHours();
        totalWorkingHours += empHrs;
        empDailyWageArr.push(
            {
                dayNUm: totalWorkingDays,
                dailyHours: empHrs,
                dailyWage: calDailyWage(empHrs),
                toString() {
                    return "\n Day" + this.dayNUm + " => working Hours is " + this.dailyHours +
                        " And Wage Earned = " + this.dailyWage
                },
            });
    }
    console.log("Total wage of month is : " + totalWage);
    console.log(empDailyWageArr.toString());
}
/* calculate daily wage */
calDailyWage = (empHrs) => {
    let dailyWage = empHrs * WAGE_PER_HOUR;
    totalWage += dailyWage;
    return dailyWage;
}

main();