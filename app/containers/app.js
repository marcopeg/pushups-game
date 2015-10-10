
import React from 'react';
import { connect } from 'react-redux';

import { initFirebase } from 'services/firebase-service';

import Grid from 'react-bootstrap/lib/Grid';

@connect(s => s)
export class App extends React.Component {

    componentWillMount() {
        this.props.dispatch(initFirebase());
    }

    render() {
        return (
            <Grid>
                PushupsGame
            </Grid>
        );
    }
}
