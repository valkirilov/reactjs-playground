import React, { Component } from 'react';

import './index.css';

import PostsService from './../../Common/PostsService';
import AlbumsService from './../../Common/AlbumsService';

import LoadingIndicator from './../../Atoms/LoadingIndicator';
import ErrorAlertBlock from './../../Molecules/ErrorAlertBlock';
import AlbumsList from '../../Organisms/AlbumsList';
import PostsList from '../../Organisms/PostsList';

class Home extends Component {

  constructor() {
    super();

    this.state = {
      isLoaded: false,
      error: null,
      posts: [],
      albums: []
    };
  }

  componentDidMount() {
    this.fetchPosts();
    this.fetchAlbums();
  }

  fetchPosts() {
    let postsService = new PostsService();

    postsService
      .fetchAll()
      .then(
        (posts) => {
          this.setState({
            isLoaded: true,
            posts: posts,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  fetchAlbums() {
    let albumsService = new AlbumsService();

    albumsService
      .fetchAll()
      .then(
        (albums) => {
          this.setState({
            isLoaded: true,
            albums: albums,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, albums, posts } = this.state;

    if (error) {
        return (
            <div className="row">
                <div className="col">
                    <ErrorAlertBlock message={error} />
                </div>
            </div>
        );
    }
    else if (!isLoaded) {
        return (
            <LoadingIndicator />
        );
    }
    else {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <PostsList posts={posts} />
                </div>
                <div className="col-sm-6">
                    <AlbumsList albums={albums} />
                </div>
            </div>
        );
    }
  }
}

export default Home;
