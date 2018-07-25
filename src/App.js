import React from 'react'
import {Link, Route} from 'react-router-dom'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './Library'
import Search from './Search'

class BooksApp extends React.Component {

  render() {
    return (
      //<BrowserRouter>
        <div className="app">
          <Route exact path='/search' component={Search}/>
          <Route exact path='/' component2={() => (
              <div>
                <Library load={this.getLibraryBooks} />
                <div className="open-search">
                  <Link to='/search'>Add a book</Link>
                </div>
              </div>
            )}/>
        </div>
      //</BrowserRouter>
    )
  }
}

export default BooksApp
