import React from 'react'
import './App.css'
import Book from './Book'

class ShelfChanger extends React.Component{
  render() {
    return(
      <div className="book-shelf-changer">
        <select value={this.props.bookState.shelf} onChange={this.props.action}>
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
