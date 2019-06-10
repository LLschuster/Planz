import React from 'react';
import {NavLink} from 'react-router-dom'

const SigninLink = () => {
    return (
        <ul className='right'>
            <li><NavLink to='/'>Create project</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink'>ll</NavLink></li>
        </ul>
    );
}

export default SigninLink;