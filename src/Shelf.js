import React from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Shelf extends React.Component {
  render (){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book bookCoverURL={bookid} bookTitle={bookTitle} bookAuthor={bookAuthor}/>
            </li>
            <li>
              <Book bookCoverURL={bookid} bookTitle={bookTitle} bookAuthor={bookAuthor}/>
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
