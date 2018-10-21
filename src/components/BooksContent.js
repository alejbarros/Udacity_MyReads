import React, {Component} from 'react'
import '../App.css'
import Shelf from './Shelf'
import {PropTypes} from 'prop-types'

class BooksContent extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render() {
    const books = this.props.books
    return (
      <div className="list-books-content">
        <div>
          <Shelf books={books.filter((book) => (book.shelf === "currentlyReading"))} title="Currently Reading" onChangeShelf={this.props.onChange}/>
          <Shelf books={books.filter((book) => (book.shelf === "read"))} title="Read" onChangeShelf={this.props.onChange}/>
          <Shelf books={books.filter((book) => (book.shelf === "wantToRead"))} title="Want to Read" onChangeShelf={this.props.onChange}/>
        </div>
      </div>
    )
  }
}
export default BooksContent
