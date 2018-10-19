import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import BarTopBooks from './BarTopBooks'
import FooterBooks from './FooterBooks'
import '../App.css'
import BooksContent from './BooksContent'

class Books extends Component {

  static propTypes = {
      books: PropTypes.array.isRequired,
      onChange: PropTypes.func.isRequired
  }

  render() {
    const books = this.props.books
    return (
          <div className="list-books">
              <BarTopBooks />
              <BooksContent books={books} onChange={this.props.onChange} />
              <FooterBooks />
          </div>
    )
  }

}

export default Books;
