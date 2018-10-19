# MyReads Project

The project MyReads is the application to manage the books the users read or want to read in the future. The goal of this project is show different skills in React.
The application is similar Goodreads, you can choose three main areas : read, current read or want to read. Also MyRead shows information about the books and provide preview of books.

## To run the application:

* First option

* Download the repository:
* Click download ZIP on the right of the screen, then extract the zip file to your computer.
* Navigate to where you unzipped the file.
* install all project dependencies with `npm install`
* start the development server with `npm start`

* Second option

* Clone repository
* From command line type : git clone https://github.com/alejbarros/Udacity_MyReads.git
* Navigate to where you clone the repository.
* install all project dependencies with `npm install`
* start the development server with `npm start`

## structure Project
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    └── components
        ├── BarTopBooks.js # Component represent bar top.
        ├── Book.js # component represents book.
        ├── Books #Component contains another components.
        ├── BooksContent.js # Component represent the main areas of app.
        ├── FooterBooks.js # Component represents footer.
        ├── Search.js # Component to search different books by querys to API.
        └── Shelf.js #component represents shelf.
    └── utils
        ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.

```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
