import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
  }

  change_shelf = (e) => {
    this.props.onUpdate(e.target.value)
  }

  render() {
    const book = this.props.book
    return (
      <li>
      <div class="flip-card">
      <div class="flip-card-inner">

            <div class="flip-card-front">

            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.imageLinks.thumbnail}")`
            }}></div>
            </div>

          <div class="flip-card-back">
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
            
            <div className="book-shelf-changer">
              <select onChange={this.change_shelf} value={book.shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>

          </div>

      </div>
      </div>
      </li>
    )
  }
}

export default Book;