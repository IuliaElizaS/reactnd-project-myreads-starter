import React from 'react'
import Shelf from './Shelf'
//import * as BooksAPI from './BooksAPI'
import './App.css'

class Library extends React.Component {

  //when the Component Mounts to the DOM calls getLibraryBooks()
  componentDidMount(){
    this.props.getBooks();
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
              <Shelf getbooks={this.props.libraryBooks} setShelf = {this.props.changeshelf} bookshelfTitle='Currently Reading' shelf='currentlyReading'/>
              <Shelf getbooks={this.props.libraryBooks} setShelf = {this.props.changeshelf} bookshelfTitle='Want to Read' shelf='wantToRead'/>
              <Shelf getbooks={this.props.libraryBooks} setShelf = {this.props.changeshelf} bookshelfTitle='Read' shelf='read'/>
            </div>
        </div>
      </div>
    )
  }
}

export default Library;
