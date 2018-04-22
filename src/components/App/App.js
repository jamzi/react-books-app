import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './../Header/Header';
import Home from './../Home/Home';
import Search from './../Search/Search';
import Recommended from './../Recommended/Recommended';
import BookDetail from './../BookDetail/BookDetail';
import Bookshelves from './../Bookshelves/Bookshelves';
import BookshelfDetail from './../BookshelfDetail/BookshelfDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/recommended" component={Recommended} />
          <Route path="/book/:bookId" component={BookDetail} />
          <Route path="/bookshelves" component={Bookshelves} />
          <Route path="/bookshelf/:bookshelfId" component={BookshelfDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
