import React from 'react'; 
import { Link } from 'react-router-dom'

const  UserNavigationBar = ({ logout }) => (
    <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link"
            to='/main'>Home</Link>
    </li>
     
        <li className="nav-item">
            <Link className="nav-link" 
            to='/offer'>Make an Offer</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" 
            to='/profile'>Profile</Link>
        </li>
     
         <li className="nav-item">
         <Link className="nav-link" onClick={logout}
               to='/login'>
                   Logout
           </Link>
       </li>
</ul>
)

export default UserNavigationBar;