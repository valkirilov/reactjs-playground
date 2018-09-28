import React, { Component } from 'react';

import './index.css';

import AlbumsService from './../../Common/AlbumsService';

import LoadingIndicator from './../../Atoms/LoadingIndicator';
import ErrorAlertBlock from './../../Molecules/ErrorAlertBlock';
import AlbumsList from '../../Organisms/AlbumsList';

class Albums extends Component {

  constructor() {
    super();

    this.state = {
      error: null,
      isLoaded: false,
      albums: []
    };
  }

  componentDidMount() {
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
    const { error, isLoaded, albums } = this.state;

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
                <div className="col">
                    <AlbumsList albums={albums} />
                </div>
            </div>
        );
    }
  }
}

export default Albums;
