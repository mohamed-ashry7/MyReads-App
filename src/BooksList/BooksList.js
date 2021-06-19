import React from "react";
import BookShelf from "../BookShelf/BookShelf";
import propTypes from "prop-types";
const BooksList = ({ books ,updateBookShelf}) => {
  return (
    <div className="list-books-content">
      <BookShelf shelf={"Currently Reading"} books={currentlyReading(books)} updateBookShelf={updateBookShelf} />
      <BookShelf shelf={"Want to Read"} books={wantToRead(books)} updateBookShelf={updateBookShelf} />
      <BookShelf shelf={"Read"} books={read(books)} updateBookShelf={updateBookShelf}/>
    </div>
  );
};
const currentlyReading= (books)=>{
  return books.filter(book=>"currentlyreading"===book.shelf.toLowerCase())
}
const read= (books)=>{
  return books.filter(book=>"read"===book.shelf.toLowerCase())
}
const wantToRead= (books)=>{
  return books.filter(book=>"wanttoread"===book.shelf.toLowerCase())
}
BooksList.propTypes = {
  books: propTypes.array.isRequired,
};

export default BooksList;
