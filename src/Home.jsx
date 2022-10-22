import React from 'react'
import Shelf from './Shelf'

function Home({shelfName,handleshelfBooks,getAllBooks}) {
  return (
    <div>
         <div className="list-books-title">
            <h1>MyReads</h1>
          </div>   
    {shelfName.map(shelfName=>(
       <Shelf shelfName={shelfName} books={handleshelfBooks(shelfName)}  key={shelfName} getAllBooks={getAllBooks}/>))}
                     
     
   </div>
  )
}

export default Home