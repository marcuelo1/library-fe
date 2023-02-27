class Book {
  constructor(id, title, isbn, dewey_decimal, issn){
    this.id = id
    this.title = title 
    this.isbn = isbn 
    this.dewey_decimal = dewey_decimal
    this.issn = issn
    this.type = "book"
    this.img = require("../assets/icons/book.png")
  }

  static rawDataToBook(dataRaw){
    return new Book(dataRaw['id'], dataRaw['title'], dataRaw['isbn'], dataRaw['dewey_decimal'], dataRaw['issn'])
  }

  static rawDataToBooks(dataRaw){
    return dataRaw.map(raw => Book.rawDataToBook(raw))
  }

  static sampleData(){
    var data = [
      {
        id: 1,
        title: "Book 1",
        isbn: "978-3-16-148410-0",
        dewey_decimal: "352.34",
        issn: "2049-3630"
      },
      {
        id: 2,
        title: "Book 2",
        isbn: "978-3-16-148410-0",
        dewey_decimal: "352.34",
        issn: "2049-3630"
      },
      {
        id: 3,
        title: "Book 3",
        isbn: "978-3-16-148410-0",
        dewey_decimal: "352.34",
        issn: "2049-3630"
      },
    ]
  }
}

export default Book;