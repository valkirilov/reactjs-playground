import React, { Component } from 'react';

import { FormattedMessage } from 'react-intl';

import Album from './../Molecules/Album';

class AlbumsList extends Component {
    render() {
        return (
            <div>
                <h1>
                    <FormattedMessage id="albums.heading" defaultMessage="Albums" />
                </h1>
                {
                    this.props.albums.map((album, index) => {
                        return <Album
                            key={index}
                            data={album}
                            showLink={true}
                        />
                    })
                }
            </div>
        );
    }
}

export default AlbumsList;