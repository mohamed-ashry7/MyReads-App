import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import "./BooksAPI";
import { get, getAll, search, update } from "./BooksAPI";
import BooksList from "./BooksList/BooksList";
import SearchBar from "./SearchBar/SearchBar";
import { Link, Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false,
    searchedBooks: [],
  };

  componentDidMount() {
    getAll()
      .then((books) => {
        this.setState({
          books: books,
        });
      })
      .catch((err) => console.log(err));
  }

  updateBookShelf = (id, shelf) => {
    let doesExist = false
    let searchExist=false
    const updatedSearchBooks = [...this.state.searchedBooks]
    const updatedBooks = [...this.state.books];
    updatedBooks.forEach((book) => {
      if (book.id === id) {
        book.shelf = shelf;
        doesExist = true;
      }
    });
    updatedSearchBooks.forEach((b)=>{
      if (b.id===id){
        b.shelf= shelf
        searchExist=true
      }
    })
    if (doesExist) {
      this.setState({
        books: updatedBooks,
      });
    }
    if (searchExist){
      this.setState({searchedBooks:updatedSearchBooks})
    }
    
    get(id).then((book) =>
      update(book, shelf).then(() => {
        if (!doesExist) {
          book.shelf=shelf
          this.setState((currentState)=>(
          {books:[...currentState.books,book]}
          ))
        }
        ;
      })
    );
  };
  searchBooks = (query) => {
    search(query)
      .then((searchedBooks) => {
        Array.isArray(searchedBooks)
          ? this.setState({ searchedBooks: this.adjustTheShelfs(searchedBooks) })
          : this.setState({ searchedBooks: [] });
      })
      .catch(this.setState({ searchedBooks: [] }));
  };
  adjustTheShelfs=(searchedBooks)=>{

    const updatedBooks = [...searchedBooks]
    updatedBooks.forEach(s=>{
      this.state.books.forEach(b=>{
        if (s.id===b.id){
          s.shelf=b.shelf
        }
      })
    })
    return updatedBooks
  }
  resetSearchState = () => {
    this.setState({ showSearchPage: false, searchedBooks: [] });
  };
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBar
              resetSearchState={this.resetSearchState}
              searchBooks={this.searchBooks}
              updateBookShelf={this.updateBookShelf}
              searchedBooks={this.state.searchedBooks}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BooksList
                books={this.state.books}
                updateBookShelf={this.updateBookShelf}
              />
              <div className="open-search">
                <Link to="/search">
                  <button
                    onClick={() => this.setState({ showSearchPage: true })}
                  >
                    Add a book
                  </button>
                </Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
