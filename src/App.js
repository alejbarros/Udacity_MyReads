import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import Books from './components/Books'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
    books : []
  };
  componentDidMount() {
    this.get_books();
  }

  get_books = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  update_books = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.get_books()
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<Books books={this.state.books} onChange={this.update_books}/>)}/>
        <Route exact path="/search" render={({history}) => (<Search onChange={this.update_books} myBooks={this.state.books}/>)}/>
      </div>
    )
  }

}

export default BooksApp
