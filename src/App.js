import "./App.css";
import { useEffect, useState } from "react";
import Shelf from "./Shelf";
import * as BookAPI from "./BooksAPI";
import Home from "./Home";
import {Route,Routes,NavLink} from 'react-router-dom'
import Search from "./Search";


function App() {

  const [shelfName,setShelfName] =useState(["currentlyReading", "wantToRead", "read"]);
  const [books, setBooks] = useState([]);


  // get all books
  const getAllBooks = async () => {
    const bookList = await BookAPI.getAll();
    setBooks(bookList);
   
  };



  useEffect(() => {
    getAllBooks();
    console.log(books);
    console.log(shelfName);
  }, []);

const handleshelfBooks=(shelfName)=>{
  return books.filter(book=>book.shelf===shelfName)
  
}
  return (
    <div className="app">
      
      <div className="list-books">
          
          <div className="list-books-content">
       
            <Routes>
              <Route path="/" element={ <Home shelfName={shelfName} handleshelfBooks={handleshelfBooks} getAllBooks={getAllBooks}/>}/>
              <Route path="search" element={<Search shelfName={shelfName} getAllBooks={getAllBooks} books={books}/>}/>
            </Routes>
          
          </div>
          <div className="open-search">
            <NavLink to="/search">Add a book</NavLink>
          </div>
        </div>
    
    </div>
  );
}

export default App;
