import React from 'react'
import Book from './Book'

function Shelf({shelfName,books,getAllBooks,handleshelfBooks}) {
    console.log(books)
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{shelfName}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book,idx)=>(
            <li key={book.id}>
            <Book  shelfName={shelfName} book={book} getAllBooks={getAllBooks} handleshelfBooks={handleshelfBooks}/>
             </li>
       ))}
       
         </ol>
         </div>
         </div>
    
         
  )
}

export default Shelf