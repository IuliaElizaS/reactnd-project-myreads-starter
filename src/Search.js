import React from 'react'
import {Link} from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input'
import sortBy from 'sort-by'
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
            {/* Debounce implementation suggested by the project reviewer*/}
            <DebounceInput minLength={1} debounceTimeout={300} type="text" placeholder="Search by title or author" value={this.state.query} onChange = {event => this.searchResult(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/*checks if searchedBooks contains books */
              (/*(typeof this.state.searchedBooks === 'object' )  &&*/  this.state.searchedBooks.length > 0) ?
                  //method to check the array type from https://webbjocke.com/javascript-check-data-types/
                  //If it does, sorts the books by title
                  (this.state.searchedBooks.sort(sortBy('title')),
                  //maps over the array
                  this.state.searchedBooks.map(newbook => {
                      //maps over the existing books and checks if the book returned from the search is already on one of the library's shelves
                      this.props.libraryBooks.map(shelfBook => {
                        if (newbook.id === shelfBook.id) {
                          //if true sets the proper shelf for that book
                          newbook.shelf = shelfBook.shelf;
                        };
                        return newbook;
                      })
                      //and renders the book
                      return (
                        <li key={newbook.id}>
                          <Book myread={newbook} updateShelf={this.props.changeshelf}/>
                        </li>
                      )
                  })
              ) : (
                 <span> There is no book to display. </span>
              )
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
