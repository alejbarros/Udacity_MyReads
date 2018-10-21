import React, {Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Book from './Book'
import {PropTypes} from 'prop-types'
import * as BooksAPI from '../utils/BooksAPI'

class Search extends Component {

  state = {
    books: [],
    query: '',
    searchErr: false
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    myBooks: PropTypes.array.isRequired
  }

    changeShelf = (books) => {
      let all_Books = this.props.myBooks
      for (let book of books) {
        book.shelf = "none"
      }

      for (let book of books) {
        for (let b of all_Books) {
          if (b.id === book.id) {
            book.shelf = b.shelf
          }
        }
      }
      return books
    }

getBooks = event => {
  const query = event.target.value;
  this.setState({ query });
    // if user input => run the search
  if (query) {
    BooksAPI.search(query.trim(), 20).then(books => {
      if(books.length > 0){
        books = this.changeShelf(books)
        this.setState({ books: books, searchErr: false })
      }else {
        this.setState({ books: [], searchErr: true })
      }
    });
      // if query is empty => reset state to default
    } else this.setState({ books: [], searchErr: false });
  };

  add_book = (book, shelf) => {
    this.props.onChange(book, shelf)
  }

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.getBooks}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.query.length > 0 && this.state.books.map((book, id) => (<Book book={book} key={book.id} onUpdate={(shelf) => {
              this.add_book(book, shelf)
            }}/>))}
          </ol>
          {this.state.searchErr && (
            <h3>Search did not return any books. Please try again!</h3>
          )}
        </div>
      </div>
    )
  }


}
export default Search
