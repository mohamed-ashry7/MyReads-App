import React from "react";
import Book from "../Book/Book";
import PropTypes from "prop-types";
const bookShelf = ({ shelf, books, updateBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((bookN) => {
            
            const book = bookN && validateAttributes(bookN);
            return (
                book&&<li key={book.id}>
                {
                  <Book
                    id={book.id}
                    title={book.title}
                    authors={book.authors}
                    backGroundURL={book.imageLinks.smallThumbnail}
                    updateBookShelf={updateBookShelf}
                  />
                }
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
const validateAttributes = (book) => {
  const validatedBook = { ...book };
  validatedBook.id = book.id ? book.id : "Unknown";
  validatedBook.title = book.title ? book.title : "Unknown";
  validatedBook.authors = book.authors ? book.authors : ["Unknown"];
  if(!(book.imageLinks&&book.imageLinks.smallThumbnail))
    {
        validatedBook.imageLinks={
            smallThumbnail:"Unknown"
        }
    }

  return validatedBook;
};
bookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
};

export default bookShelf;
