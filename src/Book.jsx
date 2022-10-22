import React from 'react'
import Select from './Select'

function Book({book,getAllBooks,shelfName}) {
   
  return (
    <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                `url(${book.imageLinks?book.imageLinks.smallThumbnail:" "})`}}
                          ></div>
                          <div className="book-shelf-changer">
                           <Select shelfName={shelfName} book={book} getAllBooks={getAllBooks} />
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors?book.authors.map(el=>el):" "}</div>
                      </div>
       
    
 
  )
}

export default Book