import React from 'react'
import ShelfChanger from './ShelfChanger'
import './App.css'


class Book extends React.Component {
  //checks if the book has imageLink proprety (and thumbnail), if no, will recive a custom placeholder; placeholder source: 'https://placeholder.com'
  bookImage = () => {
    let bookCover = '';
    this.props.myread.imageLinks ? bookCover = this.props.myread.imageLinks.thumbnail : bookCover = "http://via.placeholder.com/128x193/ffe99b/282c4b?text=No+Image";
        return bookCover;
  }

  render (){
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.bookImage()})`, backgroundSize: 'cover' }}></div>
          { /* ShelfChanger component recives the book object and shelfUpdater method from it's parent */ }
          <ShelfChanger bookState={this.props.myread} action={this.props.updateShelf} />
        </div>
        <div className="book-title">{this.props.myread.title}</div>
        <div className="book-authors">{this.props.myread.authors ? this.props.myread.authors.join(', ') : ''}</div>
      </div>
    )
  }
}

export default Book;
