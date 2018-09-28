import React, { Component } from 'react';

import { FormattedMessage } from 'react-intl';

import Post from './../Molecules/Post';

class PostsList extends Component {
    render() {
        return (
            <div>
                <h1>
                    <FormattedMessage id="posts.heading" defaultMessage="Posts" />
                </h1>
                {
                    this.props.posts.map((post, index) => {
                        return <Post
                            key={index}
                            data={post}
                            showLink={true}
                        />
                    })
                }
            </div>
        );
    }
}

export default PostsList;