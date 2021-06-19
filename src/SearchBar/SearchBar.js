

import React from 'react'
import BookShelf from '../BookShelf/BookShelf'
import PropTypes from "prop-types";

import {Link} from 'react-router-dom'
const searchBar = ({resetSearchState,searchBooks,updateBookShelf,searchedBooks})=>{



    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
            <button
              className="close-search"
              onClick={() => resetSearchState()}>
              Close
            </button>
            </Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" 
              onChange={(event)=>{searchBooks(event.target.value)}}/>
            </div>
          </div>
          <div className="search-books-results">
            <BookShelf books={searchedBooks} shelf={"Search Books Results"} updateBookShelf={updateBookShelf}/>
          </div>
        </div>
      )
}

searchBar.propTypes = {
    resetSearchState: PropTypes.func.isRequired,
    searchBooks: PropTypes.func.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    searchedBooks: PropTypes.array.isRequired,

  };
  
export default searchBar; 