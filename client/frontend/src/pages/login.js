import React from 'react';
import { Outlet } from 'react-router-dom'
import LoginButtons from '../components/LoginButtons';
import LogoutButtons from '../components/LogoutButtons';


const Login = () => {
    return(
        <>
        <h1>Welcome to Nock!</h1>
        <h2>Please click here  to sign in</h2>
        <LoginButtons/>
        <LogoutButtons />

        {/* <a href = "/">Login</a> */}
        </>
    )

}

export default Login;