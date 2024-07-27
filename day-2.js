// activity 1 Arithmetic operation 

// task 1
const num1 = 5 
const num2 = 10 ;
console.log("sum of num1 and num2 is " ,  num1 + num2 )

// task 2
const num3 = 2024;
const num4 = 2020;
console.log("subtraction of num3 and num4 is " , num3 - num4)

// task 3
const num5 = 17 ;
const num6 = 39 ;
console.log("multiplication of num5 and num6 is " , num5 * num6)

// task 4
const num7 = 10 ;
const num8 = 2 ;
console.log("division of num7 and num8 is " , num7 / num8)

// task 5
const num9 = 86 ;
const num10 = 3 ;
console.log( "modulus of num9 and num10 is " , num9 % num10)

// activity 2 Assiagnment Operator

// task 6
let a = 10 ;
a+=8
console.log("New value of a is" , a)

// task 7
let var1 = 10;
var1-=3
console.log("New value of var1 is" , var1)

// activity 3 Comparison Operator

// task 8
const x = 8;
const y = 10 ;
const ans1 = x>y
console.log("x>y is",ans1)
const ans2 = x<y
console.log("x<y is",ans2)

//task 9
const ans3 = x>=y
console.log("x>=y is",ans3)
const ans4 = x<=y
console.log("x<=y is",ans4)

// task 10
const ans5 = x==y 
console.log("x==y is",ans5)

// activity 4 Logical Operator

// task 11
const age = 25;
if(age >= 18 && age <= 60)
{
  console.log("you can drive ")
}
else 
{
  console.log("you can not drive")
}

// task 12
const age1 = 1;
if(age1 >= 18 || age1 <= 60)
{
  console.log("you can go to party")
}
else
{
  console.log("you can not go to party")
}

// task 13
const p = 25;
const q = 2;
const value = !(p>q)
console.log(value)

// activity 5 Ternary Operator

// task 14
const number = -9
const answer = number>0 ? "positive" : "negative"
console.log("The number is",answer)