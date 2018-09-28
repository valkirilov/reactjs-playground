import React, { Component } from 'react';
import Cookie from 'js-cookie';

const buttonStyles = {
    marginLeft: '5px'
};

class LocaleButton extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        Cookie.set('locale', this.props.value);
        window.location.reload();
    }

    render() {
        return (
            <button
                className="btn btn-outline-secondary my-2 my-sm-0"
                onClick={this.handleClick}
                style={buttonStyles}
            >
                {this.props.value}
            </button>
        );
    }
};

export default LocaleButton;
