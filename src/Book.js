import React from 'react'
import ShelfChanger from './ShelfChanger'
import './App.css'


class Book extends React.Component {
  /*saves parent's method changeShelf in a new method, in order to pass it further to it's child component, ShelfChanger*/
  shelfUpdater = (actualBook, selectedShelf) => {this.props.updateShelf}

  render (){
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("{this.props.myread.imageLinks.thumbnail}")', backgroundSize: 'contain' }}></div>
          { /* ShelfChanger component recives the book object and shelfUpdater method from it's parent */ }
          <ShelfChanger bookState={this.props.myread} action={this.shelfUpdater} />
        </div>
        <div className="book-title">{this.props.myread.title}</div>
        <div className="book-authors">{this.props.myread.authors}</div>
      </div>
    )
  }
}

export default Book;
