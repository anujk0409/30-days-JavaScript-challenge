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