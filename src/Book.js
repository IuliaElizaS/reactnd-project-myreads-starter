import React from 'react'
import ShelfChanger from './ShelfChanger'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Book extends React.Component {
  render (){
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("{this.props.bookCoverURL}")' }}></div>
          <ShelfChanger />
        </div>
        <div className="book-title">{this.props.bookTitle}</div>
        <div className="book-authors">{this.props.bookAuthor}</div>
      </div>
    )
  }
}

export default Book
