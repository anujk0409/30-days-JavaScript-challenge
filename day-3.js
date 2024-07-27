// activity 1 if-else statement

// task 1
const num = -9
if(num >0)
  console.log("the num is positive")
else if(num<0)
  console.log("the num is negative")
else 
  console.log("the num is zero")


//task2
const age = 25
if(age>=18)
{
  console.log("you are eligible to vote")
}
else 
{
  console.log("you are not eligible to vote")
}


// activity 2 Nested if-else statement

// task 3
const num1 = 10
const num2 = 20
const num3 = 15
if(num1>num2 && num1>num3)
{
  console.log("num1 is the greatest")
}
else if(num2>num1 && num2>num3)
{
  console.log("num2 is the greatest")
}
else
{
  console.log("num3 is the greatest")
}


// activity 3 Switch case 

// task 4
let dayNumber = 2;

switch(dayNumber){
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
    default: console.log("plese enter the valid day number");
    break;
    
    
}


// task 5
let grade = "C";
switch(grade)
  {
    case "A": console.log("Excellent");
      break;
    case "B": console.log("Good");
      break;
    case "C": console.log("Average");
      break;
    case "D": console.log("Poor");
      break ;
    case "F": console.log("Fail")
  }


// activity 4 Switch case 

// task 6
let num4 = 92485
if(num4%2==0 ? console.log("even") : console.log("odd") ){
  console.log(num4)
}


// activity 5 Switch case 

// task 7
let year = 2024 
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
{
  console.log("leap year")
}
else 
{
  console.log("not a leap year")
}