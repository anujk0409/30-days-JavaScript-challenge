// activity 1 Template Literals

// task 1
let name = "anuj kumar"
let age = "22"
console.log(`my name is ${name} and my age is ${age} `)

//  TASK 2
const multiString = `this is a multi line string
this is the second line
this is the third line`
console.log(multiString)


// activity 2 Desctructuring

// task 3
const number = [1, 2, 3, 4, 5]
const [a, b, c, d, e] = number 
console.log("first element is " + a)
console.log("second element is " + b)


// task 4
const book = {
  title : "javascript",
  author : "ram",
  year: 2020,
}
const {title , author , year} = book 
console.log("the title of the book is",title)
console.log("the author of the book is",author)


// activity 3 Spread and rest operator

// task 5
let arr1 =[1,2,3,4,5]
let arr2= [6,7,8,9,10]
let finalArray = [...arr1,...arr2]  // spreed operator
console.log(finalArray)


// activity 4 Default parameters

// task 6
function defaultParameters(a , b = 1)
{
  return a*b;
  
}
console.log("whitout passing the default value ",defaultParameters(10))
console.log("while passing the default value ",defaultParameters(10,2))



// activity 5 Enhanced object literals

// task 7 and task 8
const person = {
    name:"Anuj kumar",
    age:22,
    profession : "Full-Stack Developer",
    // Method shorthand
    greet() {
      console.log(`Hello, my name is ${this.name} and I am a ${this.profession}`);
    },
    // Computed property names
    ["hobby" + "List"]: ["Reading", "Coding", "Hiking"]
  };
  
  console.log(person);
  
  // Calling the method
  person.greet();
  