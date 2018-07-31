import React from 'react'
import './App.css'


class ShelfChanger extends React.Component{
  render() {
    return(
      <div className="book-shelf-changer">
        {/*On option change, calls the BooksAPI.update method (passed in from the parent component) and passes it the curent book and the selected value as parameters */ }
        <select value={this.props.bookState.shelf} onChange={(event) => this.props.action (this.props.bookState, event.target.value)}>
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

export default ShelfChanger;
