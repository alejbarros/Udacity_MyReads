import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import Modal from 'react-responsive-modal';
import noCover from '../images/no-cover-image.png';

class Book extends Component {

   state = {
     open: false,
   };

   onOpenModal = () => {
     this.setState({ open: true });
   };

   onCloseModal = () => {
     this.setState({ open: false });
   };

  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
  }

  change_shelf = (e) => {
    this.props.onUpdate(e.target.value)
  }

  render() {
    const book = this.props.book;
    const { open } = this.state;
    const coverImg =
      book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : noCover;
    const title = book.title ? book.title : 'No title available';

    return (
      <li>
      <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${coverImg}")`
                  }}>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="book-title">{title}</div>
              <div className="book-authors">{book.authors}</div>
              <button onClick={this.onOpenModal}>Info</button>
              <Modal open={open} onClose={this.onCloseModal} center>
                  <h2 align="center">Description</h2>
                  <p>{book.description}</p>
                  <h5>Language: {book.language}</h5>
                  <h5>Pages: {book.pageCount}</h5>
                  <h5>Publication Date: {book.publishedDate}</h5>
                  <p aling="center"><a href={book.previewLink} target="_blank">Preview of book</a></p>
              </Modal>
              <div className="book-shelf-changer">
                <select onChange={this.change_shelf} value={book.shelf}>
                  <option value="move" disabled>Move to...</option>
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
