import React from "react";
import PropTypes from 'prop-types'
import BookShelfChanger from '../BookShelfChanger/BookShelfChanger'
const book = ({id,backGroundURL,title,authors,updateBookShelf}) => {
  
  
  
    return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              `url(${backGroundURL})`,
          }}
        ></div>
        <BookShelfChanger id ={id} updateBookShelf={updateBookShelf}/>
      </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.map(author=>(`${author} `))}</div>
    </div>
  );
};

book.propTypes = {
    id:PropTypes.string.isRequired,
    backGroundURL: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.array,
    updateBookShelf:PropTypes.func.isRequired
};
export default book;
