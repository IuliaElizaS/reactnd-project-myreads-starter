import React from 'react'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Library extends React.Component {
  render (){
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf bookshelfTitle='Currently Reading'/>
            <Shelf bookshelfTitle='Want to Read'/>
            <Shelf bookshelfTitle='Read'/>
          </div>
        </div>
      </div>
    )
  }
}

export default Library
