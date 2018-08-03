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
       console.log(this.state.existingBooks);
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/search' component={() => (
              <div>
                <Search libraryBooks={this.state.existingBooks}/>
              </div>
            )}/>
          <Route exact path='/' render={() => (
              <div>
                <Library libraryBooks={this.state.existingBooks} getBooks={this.getLibraryBooks} />
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
