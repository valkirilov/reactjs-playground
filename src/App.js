import React, { Component } from 'react';

import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { intlShape, injectIntl } from 'react-intl';

import Navbar from './Organisms/Navbar';

import Home from './Pages/Home/index';
import Posts  from './Pages/Posts/index';
import PostPage  from './Pages/Posts/one';
import Albums  from './Pages/Albums/index';
import AlbumPage  from './Pages/Albums/one';

const propTypes = {
  intl: intlShape.isRequired,
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/:postId" component={PostPage} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/albums/:albumId" component={AlbumPage} />
        </div>
      </Router>
    );
  }
}

App.propTypes = propTypes;

export default injectIntl(App);
