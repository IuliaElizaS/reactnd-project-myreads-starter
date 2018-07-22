import React from 'react'
import './App.css'
import Book from './Book'

class ShelfChanger extends React.Component{
  changeShelf = (event) => {
    Book.setState({shelf: event.target.value})
  }

  render() {
    return(
      <div className="book-shelf-changer">
        <select value={Book.state.shelf} onChange='this.changeShelf'>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger
