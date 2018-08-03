import React from 'react'
import ShelfChanger from './ShelfChanger'
import './App.css'


class Book extends React.Component {

  render (){
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.myread.imageLinks.thumbnail})`, backgroundSize: 'cover' }}></div>
          { /* ShelfChanger component recives the book object and shelfUpdater method from it's parent */ }
          <ShelfChanger bookState={this.props.myread} action={this.props.updateShelf} />
        </div>
        <div className="book-title">{this.props.myread.title}</div>
        <div className="book-authors">{this.props.myread.authors}</div>
      </div>
    )
  }
}

export default Book;
