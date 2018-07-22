import React from 'react'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Library extends React.Component {
  state = {
      existingBooks: []
  }

  //gets all the books in the library
  getLibraryBooks = () => {
      BooksAPI.getAll().then(books =>{
       this.setState({existingBooks: books})
     })
       console.log(this.state.existingBooks);
  }

  render (){
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf getbooks={this.getLibraryBooks} bookshelfTitle='Currently Reading'/>
            <Shelf getbooks={this.getLibraryBooks} bookshelfTitle='Want to Read'/>
            <Shelf getbooks={this.getLibraryBooks} bookshelfTitle='Read'/>
          </div>
        </div>
      </div>
    )
  }
}

export default Library
