import React, { Component } from 'react';

import AlertBlock from './../Atoms/AlertBlock';

class ErrorAlertBlock extends Component {
    render() {
        return (
            <AlertBlock type="alert-danger" message={this.props.message} />
        );
    }
};

export default ErrorAlertBlock;
