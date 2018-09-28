import React, { Component } from 'react';

import './Post.css';

import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

class Post extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.title}</h5>
                    <p className="card-text">{this.props.data.body}</p>
                    { this.props.showLink &&
                        <Link to={"/posts/" + this.props.data.id} className="btn btn-primary">
                            <FormattedMessage id="organisms.post.readMore" defaultMessage="Read more" />
                        </Link>
                    }
                </div>
            </div>
        );
    }
}

export default Post;