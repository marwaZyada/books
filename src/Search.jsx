import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

function Search({getAllBooks,books}) {
    
const [searchItems,setSearchItems]=useState([])
console.log(books)
// handle search
const handleSearch=async(ward)=>{
    if(ward!=''){
const target=await BooksAPI.search(ward)

      setSearchItems(target)
   
   
}
else{
   setSearchItems([]) 
}

    }



  

 
   
  return (
    <div className="search-books">
    <div className="search-books-bar">
      <NavLink to="/"
        className="close-search"
      
      >
        Close
      </NavLink>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN" onChange={(e)=>{handleSearch(e.target.value)}}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        {(searchItems.length>0)&&searchItems.map(book=>{
          const item=books.find(el=>el.id===book.id)
          if(item){
            book.shelf=item.shelf
          }
          else{
            book.shelf="none"
          }
         return(   <li key={book.id}>
                
  <Book  book={book} getAllBooks={getAllBooks} />
              
                
            </li>)
})}
        {/* {searchItems.map(book=>{
const shelfName=searchItems.find(shelf=>shelf.shelf)
console.log(shelfName)
          return <Book shelfName={shelfName} book={book} getAllBooks={getAllBooks}/>
        })} */}
      </ol>
    </div>
  </div>
  )
}

export default Search