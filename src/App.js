import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './Library'
import Search from './Search'

class BooksApp extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path='/search' render={Search}/>
          <Route exact path='/' render={() => (
              <div>
                <Library />
                <div className="open-search">
                  <Link to='/search'>Add a book</Link>
                </div>
              </div>
            )}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
