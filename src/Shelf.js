import React from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './Library'

class Shelf extends React.Component {

  render (){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {//filters the books in the library
            Library.state.existingBooks.filter(currentBook =>
                //if the books' shelf state matches the shelf's title itterates over them
                currentBook.state.shelf === this.props.bookshelfTitle
              ).map(shelfBook => {
                  //...and renders theses books
                    <Book key={shelfBook.state.id} myread={shelfBook.state} />
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
