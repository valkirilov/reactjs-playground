import React, { Component } from 'react';

import './index.css';

import AlbumsService from './../../Common/AlbumsService';

import LoadingIndicator from './../../Atoms/LoadingIndicator';
import ErrorAlertBlock from './../../Molecules/ErrorAlertBlock';
import Album from './../../Molecules/Album';

class AlbumPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            album: null
        };
    }

    componentDidMount() {
        let albumId = this.props.match.params.albumId;
        let albumsService = new AlbumsService();

        albumsService
            .fetchOne(albumId)
            .then(
                (album) => {
                this.setState({
                    isLoaded: true,
                    album: album,
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
        const { error, isLoaded, album } = this.state;

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
                        <Album data={album} showLink={false} />
                    </div>
                </div>
            );
        }

    }
}

export default AlbumPage;
