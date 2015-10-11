
import React from 'react';
import { connect } from 'react-redux';

import { initFirebase } from 'services/firebase-service';

import Grid from 'react-bootstrap/lib/Grid';

import { LoginScreen } from 'containers/LoginScreen';

// temporary
import { logout } from 'services/firebase-service';

@connect(s => s)
export class App extends React.Component {

    componentWillMount() {
        this.props.dispatch(initFirebase());
    }

    render() {
        var { dispatch } = this.props;
        return (
            <Grid>
                <div onClick={$=> dispatch(logout())}>PushupsGame</div>
                <LoginScreen />
            </Grid>
        );
    }
}
