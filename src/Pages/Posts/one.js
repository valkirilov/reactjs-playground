import React, { Component } from 'react';

import './index.css';

import PostsService from './../../Common/PostsService';

import LoadingIndicator from './../../Atoms/LoadingIndicator';
import ErrorAlertBlock from './../../Molecules/ErrorAlertBlock';
import Post from './../../Molecules/Post';

class PostPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            post: null
        };
    }

    componentDidMount() {
        let albumId = this.props.match.params.postId;
        let postsService = new PostsService();

        postsService
            .fetchOne(albumId)
            .then(
                (post) => {
                    this.setState({
                        isLoaded: true,
                        post: post,
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
        const { error, isLoaded, post } = this.state;

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
                        <Post data={post} showLink={false} />
                    </div>
                </div>
            );
        }

    }
}

export default PostPage;
