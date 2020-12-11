console.log("Welcone to employee wage computation");
let empCheck;
let empWorkPeriod;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

/* check employee status */
empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == 1) {
    console.log("employee is present");
    calDailyWage();
}
if (empCheck == 0) {
    console.log("employee is absent");
}

function calDailyWage()
{
   empWorkPeriod = Math.floor(Math.random() * 10) % 2;
   if(empWorkPeriod==1)
   {
   let wage=FULL_TIME_HOURS*WAGE_PER_HOUR;
   console.log("employee full time present and wage : "+wage);
   }
}