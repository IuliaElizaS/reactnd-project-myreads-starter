import React from 'react'
import {Link, Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './Library'
import Search from './Search'

class BooksApp extends React.Component {

  state = {
      existingBooks: []
  }

  //gets all the books in the library
  getLibraryBooks = () => {
      BooksAPI.getAll().then(books =>{
        //console.log(books);
        this.setState({existingBooks: books});
      });
      this.state.existingBooks.map( book => {
        //this.checkImage();
        return book;
      })
      console.log(this.state.existingBooks);
  }

  //changes the shelf by calling the BooksAPI.update method
  changeShelf = (actualBook, selectedShelf) => {
      BooksAPI.update (actualBook, selectedShelf).then(this.getLibraryBooks);
      //and updates the library by fetching the books in the library
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/search' component={() => (
              <div>
                <Search libraryBooks={this.state.existingBooks} changeshelf={this.changeShelf} />
              </div>
            )}/>
          <Route exact path='/' render={() => (
              <div>
                <Library libraryBooks={this.state.existingBooks} getBooks={this.getLibraryBooks} changeshelf={this.changeShelf} />
                <div className="open-search">
                  <Link to='/search'>Add a book</Link>
                </div>
              </div>
            )}/>
        </div>
    )
  }
}

export default BooksApp;
