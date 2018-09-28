import React, { Component } from 'react';

import './Album.css';

import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

class Album extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.title}</h5>
                    { this.props.showLink &&
                        <Link to={"/albums/" + this.props.data.id} className="btn btn-primary">
                            <FormattedMessage id="organisms.album.viewPhotos" defaultMessage="View photos" />
                        </Link>
                    }
                </div>
            </div>
        );
    }
}

export default Album;