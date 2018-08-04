import React from 'react'
import Book from './Book'
import './App.css'


class Shelf extends React.Component {

  render (){
    console.log(this.props.getbooks);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          { /*filters the books in the library*/
            this.props.getbooks.filter(currentBook =>
                /* if the books' shelf state matches the shelf's title itterates over them */
                currentBook.shelf === this.props.shelf
              ).map(shelfBook => {
                  /*...and renders the book */
                return (
                  <li key={shelfBook.id}>
                    { /* the book component recives the book object and updateShelf method*/ }
                    <Book  myread={shelfBook} updateShelf={this.props.setShelf} />
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
