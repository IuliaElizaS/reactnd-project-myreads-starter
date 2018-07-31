import React from 'react'
import Book from './Book'
import './App.css'


class Shelf extends React.Component {
  //saves parent's method changeShelf in a new method, in order to pass it further to it's child component, Book
  updateShelf = (actualBook, selectedShelf) => {this.props.setShelf (actualBook, selectedShelf)}

  render (){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          { /*filters the books in the library*/
            this.props.getbooks.filter(currentBook =>
                /* if the books' shelf state matches the shelf's title itterates over them */
                currentBook.shelf === this.props.bookshelfTitle
              ).map(shelfBook => {
                  /*...and renders theses books */
                return (
                  <li key={shelfBook.id}>
                    { /* the book component recives the book object and updateShelf method*/ }
                    <Book  myread={shelfBook} updateshelf={this.updateShelf} />
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;
