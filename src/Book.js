import React from 'react'
import ShelfChanger from './ShelfChanger'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'

class Book extends React.Component {
  state = {
      id:'',
      shelf:'',
      title:'',
      author:'',
      coverURL:''
  }

  changeShelf = (event) => {
    this.setState({shelf: event.target.value})
  }

  render (){
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: '{this.state.CoverURL}', backgroundSize: 'contain' }}></div>
          <ShelfChanger bookState={this.state.shelf} action={this.changeShelf} />
        </div>
        <div className="book-title">{this.state.title}</div>
        <div className="book-authors">{this.state.author}</div>
      </div>
    )
  }
}

export default Book
