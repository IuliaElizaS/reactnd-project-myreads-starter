import React from 'react'
import {Link} from 'react-router-dom'
/*import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'*/
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'

class Search extends React.Component {
//sets the state
  state={
    query: '',
    searchedBooks : []
  }

  //if something is typed in the input field calls BooksApi.search()
  searchResult = (query) => {
    //updates query
    this.setState({query: query});
    //checks if query exists
    if(query){
      //calls BooksAPIs search method
      BooksAPI.search(query).then(books =>
        //and updates the searchedBooks state
        this.setState({searchedBooks: books})
      );
      console.log(this.state.searchedBooks);
    }else{
      //if there is nothing typed in the input field empties query and the searched books result
      this.setState({
        query:'',
        searchedBooks : []
      });
    };
  }

  render (){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
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
            {/*checks if searchedBooks contains books */
              (this.state.searchedBooks.length > 0) ?
                  //If it does, maps over the array and generates the books
                  (this.state.searchedBooks.map(newbook => {
                      //if the book has no thumbnail, will recive a custom placeholder
                      if (! newbook.imageLinks.thumbnail) {
                        newbook.imageLinks.thumbnail = 'http://via.placeholder.com/128x193/ffe99b/282c4b?text=No+Image'; //source: https://placeholder.com
                      };
                      //and renders the book
                      return (
                        <li key={newbook.id}>
                          <Book myread={newbook} />
                        </li>
                      )
                  })
              ) : (
                 <span> Sorry, There is no book to display. </span>
              )
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
