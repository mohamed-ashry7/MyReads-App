import React from "react";
import PropTypes from 'prop-types'

const bookShelfChanger = ({id,updateBookShelf,shelf}) => {
  
  
  
    return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={(event)=>updateBookShelf(id,event.target.value)}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );

};
bookShelfChanger.propTypes = {
  id:PropTypes.string.isRequired,
  updateBookShelf:PropTypes.func.isRequired,
  shelf:PropTypes.string.isRequired

};


export default bookShelfChanger;
