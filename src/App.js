import React from 'react'
import {Link, Route} from 'react-router-dom'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './Library'
import Search from './Search'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
          <Route exact path='/search' component={Search}/>
          <Route exact path='/' render={() => (
              <div>
                <Library />
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
