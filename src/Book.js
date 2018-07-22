import React from 'react'
import ShelfChanger from './ShelfChanger'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Book extends React.Component {
  state = {
      id:'',
      shelf:'',
      title:'',
      author:'',
      coverURL:''
  }

  render (){
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: '{this.state.CoverURL}' }}></div>
          <ShelfChanger />
        </div>
        <div className="book-title">{this.state.title}</div>
        <div className="book-authors">{this.state.author}</div>
      </div>
    )
  }
}

export default Book
