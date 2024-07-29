// activity 1 array creation and acessing

// task 1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr)


// task 2
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstElement = arr1[0];
const lastElement = arr1[arr.length-1]
console.log("first element of array arr1 is ",firstElement)
console.log("last element of array arr1 is ",lastElement)

// activity 2 array methods (Basics)

// task 3
let arr2 = [1 ,2, 3 , 4 ,5]
arr2.push(6) // add new element at the end of array
console.log(arr2)


// task 4
let arr3 = [1 ,2, 3 , 4 ,5]
arr3.pop() // remove last element of array
console.log(arr3)


// task 5
let arr4 = [1 ,2, 3 , 4 ,5]
arr4.shift() // remove first element of array
console.log(arr4)


// task 6
let arr5 = [1 ,2, 3 , 4 ,5]
arr5.unshift(0) // add new element at the beginning of array
console.log(arr5)


// activity 3 array methods (Basics)

// task 7
let arr6 = [1 ,2, 3 , 4 ,5]
function double(i)
{
  return i*2;
}
// using map function
let ans = arr6.map(double)
console.log(ans)

// task 8
let arr7 = [1 ,2, 3 , 4 ,5]
function even(i)
{
  if(i%2==0)
    return i;
}
// using filter function
let ans1 = arr7.filter(even)
console.log(ans1)


// activity 4 array methods (Basics))

// task 9
let arr8 = [1 ,2, 3 , 4 ,5]
for(let i =0 ; i < arr8.length; i++)
  {
    console.log(arr8[i])
  }


// task 10 forEach loop
let arr9 = [1, 2, 3, 4, 5];

function printElement(element) {
  console.log(element);
}

arr9.forEach(printElement);

