import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

function Home() {
    return (
        <h1>Welcome to Nock!</h1>
    );
}

export default withAuthenticationRequired(Home);