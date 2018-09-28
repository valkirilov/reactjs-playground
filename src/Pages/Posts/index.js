import React, { Component } from 'react';

import './index.css';

import PostsService from './../../Common/PostsService';

import LoadingIndicator from './../../Atoms/LoadingIndicator';
import ErrorAlertBlock from './../../Molecules/ErrorAlertBlock';
import PostsList from '../../Organisms/PostsList';

class Posts extends Component {

    constructor() {
        super();

        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }

    componentDidMount() {
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

    render() {
        const { error, isLoaded, posts } = this.state;

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
                        <PostsList posts={posts} />
                    </div>
                </div>
            );
        }

    }
}

export default Posts;
