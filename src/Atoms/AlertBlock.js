import React, { Component } from 'react';

class AlertBlock extends Component {

    constructor(props) {
        super(props);

        this.styleClasses = 'alert alert-primary';
        if (this.props.type) {
            this.styleClasses = ['alert', this.props.type].join(' ');
        }
    }

    render() {
        return (
            <div className={this.styleClasses} role="alert">
                {this.props.message}
            </div>
        );
    }
};

export default AlertBlock;
