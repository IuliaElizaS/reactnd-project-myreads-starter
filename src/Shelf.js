import React from 'react'
import Book from './Book'
//import * as BooksAPI from './BooksAPI'
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
            this.props.getbooks.filter(currentBook =>
                //if the books' shelf state matches the shelf's title itterates over them
                currentBook.shelf === this.props.bookshelfTitle
              ).map(shelfBook => {
                  //...and renders theses books
                  return(
                    <Book key={shelfBook.id} myread={shelfBook} />
                  )
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
