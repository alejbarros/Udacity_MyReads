import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

const FooterBooks = () => (
  <div className="open-search">
    <Link to='/search'>Add a book</Link>
  </div>
)

export default FooterBooks
