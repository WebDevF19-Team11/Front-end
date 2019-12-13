import React from 'react'; 
import { Link } from 'react-router-dom'

const  AdminNavigationBar = ({ logout }) => {
   return <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link"
            to='/main'>Home</Link>
        </li>
     
        <li className="nav-item">
        <Link className="nav-link"
            to='/admin/Users'>Control users</Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link"
            to='/admin/Items'>Control items</Link>
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
};

export default AdminNavigationBar;