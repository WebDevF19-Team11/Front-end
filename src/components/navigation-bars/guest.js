import React from 'react'; 
import { Link } from 'react-router-dom'

const  GuestNavigationBar = ({ logout }) => (
    <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link"
            to='/main'>Home</Link>
    </li>
     
        <li className="nav-item">
            <Link className="nav-link" 
            to='/register'>Register</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" onClick={logout}
            to='/login'>Login</Link>
        </li>
</ul>
)

export default GuestNavigationBar;