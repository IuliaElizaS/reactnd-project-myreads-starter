import React from 'react'
import {Link} from 'react-router-dom'
/*import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'*/
import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './Library'
import Book from './Book'

class Search extends React.Component {
//sets the state
  state={
    query: '',
    searchedBooks : [],
    newBook: {
      id: '',
      shelf:'',
      title:'',
      author:'',
      coverURL:''
    }
  }

  //if something is typed in the input field calls BooksApi.search()
  searchResult = (query) => {
    //updates query
    this.setState({query: query.trim()});
    //checks if query exists
    if(query){
      //calls BooksAPIs search method
      BooksAPI.search(query).then(books =>
        //and updates the searchedBooks state
        this.setState({searchedBooks: books})
      )
      console.log(this.state.searchedBooks)
    }else{
      //if there is nothing typed in the input field empties query and the searched books result
      this.setState({
        query:'',
        searchedBooks : [],
        newBook : {}
        });
    };
  }

  render (){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange = {event => this.searchResult(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {//iterates over searchedBooks array
              this.state.searchedBooks.map(newbook => {
                //sets the state for each book
                this.newBook.setState({
                  id: newbook.id,
                  title: newbook.title,
                  author: newbook.author,
                  coverURL: newbook.url
                });
                return this.state.newBook;
                //if the book has no thumbnail, displays a custom placeholder
                if (this.state.newBook.coverURL === '') {
                  this.newBook.setState({
                    //source: https://placeholder.com
                    coverURL: 'http://via.placeholder.com/128x193/ffe99b/282c4b?text=No+Image'
                  })
                }
                //and renders the books
                return(
                <Book key={this.state.newBook.id} changeBookState={this.state.newBook} />
                )
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
