import React from 'react'
import {Link, Route} from 'react-router-dom'
import { Switch} from 'react-router'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './Library'
import Search from './Search'
import NoMatch from './NoMatch'

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
        <Switch>
        {/* Switch implemetation method from https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md and suggested by project reviewer */}
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
            <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp;
