// activity 1 object creation and access

// task 1
const book = {
    title: "The javaScript",
    author: "XYZ",
    year: "2024",
  }
  console.log(book)
  
  // task 2
  // title 
  console.log(book.title)
  // author 
  console.log(book.author)
  
  
  // activity 2 object methods
  
  // task 3
  const book1 = {
    title: "The javaScript",
    author: "XYZ",
    year: "2024",
    getTitleandauthor : function(){
      return ("the book " + this.title + " is writeen by "+ this.author )
    }
  }
  console.log(book1.getTitleandauthor())
  
  // task 4
  const book2 = {
    title: "The javaScript",
    author: "XYZ",
    year: "2024",
    updateYear:function(newYear)
      {
        this.year = newYear
      }
  }
  book2.updateYear("2020")
  console.log("the update year is",book2.year)


  // activity 3 object methods

// task 5
const library =
{
  name : "collage library",
  books :[
    { title : "book1",author : "xyz",year : "2023"
      } , {
      title : "book2",author : "abc",year : "2024"
      }
  ]
}

console.log(library)


// task 6 
// name of the library
console.log("the name of the library is",library.name)
// book's title in the library
for(let i =0 ; i <library.books.length ; i++)
{
  console.log("the title of the book is",library.books[i].title)
}

// activity 4 The this keyword

// task 7
let bookObject = {
name : "theory of javascript",
author : "Ram",
year : 2022,
getTitleAndYear : function(){
  return ("the book "+this.name+" was written by "+this.author+" in the year "+this.year)
}
}
console.log(bookObject.getTitleAndYear())