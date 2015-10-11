import React from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/lib/Button';

import { login } from 'services/firebase-service';

@connect(s => s.app)
export class LoginScreen extends React.Component {

    onClick = e => {
        e.target.blur();
        this.props.dispatch(login());
    }

    render() {
        var { isLoggedIn } = this.props;

        var className = isLoggedIn ? '' : ' login-screen--active';
        className = 'login-screen' + className;

        return (
            <div className={className}>
                <Button 
                    bsStyle="primary"
                    bsSize="large"
                    onClick={this.onClick}>
                    Login with Facebook</Button>
            </div>
        );
    }
}
