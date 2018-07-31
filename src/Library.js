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
     });
       console.log(this.state.existingBooks);
  }

  //changes the shelf by calling the BooksAPI.update method
  changeShelf = (actualBook, selectedShelf) => {
      BooksAPI.update (actualBook, selectedShelf);
      //and updates the library by fetching the books in the library
      this.getLibraryBooks();
  }

  //when the Component Mounts to the DOM calls getLibraryBooks()
  ComponentDidMount(){
    this.getLibraryBooks();
  }

  render (){
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {/*the Shelf component recives the existingBooks state and also the changeShelf method through props*/}
            <div>
              <Shelf getbooks={this.state.existingBooks} setShelf = {this.changeShelf} bookshelfTitle='Currently Reading'/>
              <Shelf getbooks={this.state.existingBooks} setShelf = {this.changeShelf} bookshelfTitle='Want to Read'/>
              <Shelf getbooks={this.state.existingBooks} setShelf = {this.changeShelf} bookshelfTitle='Read'/>
            </div>
        </div>
      </div>
    )
  }
}

export default Library;
