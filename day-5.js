
// activity 1 Function declaretion

// task 1
function checkNumber(num)
{
  if(num%2==0)
  {
    console.log("number is even")
  }
  else 
  {
    console.log("number is odd")
  }
}
checkNumber(778)

//  task 2
function square(num)
{
  return num*num;
}
console.log("the square of num is",square(5))


// activity 2 Function expression

// task 3
function maximum( a , b)
{
  if(a>b)
  {
    console.log(a , "is the maximuim")
  }
  else {
    console.log(b ,"is the maximum")
  }
}
maximum(4556 , 474)


 // task 4 
function concatenate(str1 , str2)
{
  return str1+str2;
}
console.log(concatenate("hello" , "world!"))


// activity 3 Arrow Function

// task 5
const sum = (a,b) => a+b;
console.log("the sum of a and b is",sum(78,21))


// task 6

const foundChar=(str , char) =>{
  if(str.includes(char)){
    console.log("character is found")
  }
  else{
    console.log("character is not found")
  }
}
foundChar("hello world" , "w")


// activity 4 Function paramters and default values

// task 7
function productOfNumbers(a,b=1)
{
  console.log(a*b)
}
productOfNumbers(5)
productOfNumbers(5 , 9)
productOfNumbers(3 ,3)


 // task 8
function greet(name , age = 18)
{
  return ("hellow "+ name + " you are " + age +" years old")
}
console.log(greet("Anuj" , 23))
console.log(greet("Atul"))


// activity 5 Higher-order Function

// task 9
function highOrder(num , cb )
{
  return cb(num)
}
function squareOfNum(num)
{
  console.log("square of num is", num*num)
}
highOrder(12 , squareOfNum)

