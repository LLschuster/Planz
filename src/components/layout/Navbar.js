import React from 'react';
import {Link} from 'react-router-dom'
import SigninLink from './SigninLink'
import SignoutLink from './SignoutLink'

const Navbar = () => {
    return (
    <nav className = 'nav-wrapper darken-3 grey'>
        <div className='container'>
            <Link to='/' className='Brand-logo'>Planz</Link>
            <SigninLink></SigninLink>
            <SignoutLink />
        </div>
    </nav>
    );
}

export default Navbar;