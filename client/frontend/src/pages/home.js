import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

function Home() {
    return (
        <h1>this is the homepage</h1>
    );
}

export default withAuthenticationRequired(Home);