import React, { useEffect, useRef } from 'react'
import * as BooksAPI from './BooksAPI'

function Select({book,getAllBooks,shelfName}) {
const shelf=useRef()
// handle update

const handleUpdate=async(book,e)=>{
await BooksAPI.update(book,e.target.value)
getAllBooks()
}

useEffect(()=>{
shelf.current.value=book.shelf;

},[])

  return (
    <select onChange={(e)=>handleUpdate(book,e)} ref={shelf}>
    <option value="move" disabled>
      Move to...
    </option>
    <option value="currentlyReading">
      Currently Reading
    </option>
    <option value="wantToRead">Want to Read</option>
    <option value="read">Read</option>
    <option value="none">None</option>
  </select>
  )
}

export default Select