import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import Book from './Book'

class Shelf extends Component {

    static propTypes = {
      books: PropTypes.array.isRequired,
      title: PropTypes.string.isRequired,
      onChangeShelf: PropTypes.func.isRequired
    }

     update = (book, shelf) => {
       this.props.onChangeShelf(book, shelf)
     }

     render() {
       const books = this.props.books
       return (
         <div className="bookshelf">
           <h2 className="bookshelf-title">{this.props.title}</h2>
           <div className="bookshelf-books">
             <ol className="books-grid">
               {books.map((book, id) => (<Book book={book} key={id} onUpdate={(shelf) => {
                 this.update(book, shelf)
               }}/>))}
             </ol>
           </div>
         </div>
       )
     }

   }

export default Shelf;
