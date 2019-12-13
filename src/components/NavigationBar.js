
import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import logo from "../assets/logo2.png"

import AdminNavigationBar from './navigation-bars/admin';
import UserNavigationBar from './navigation-bars/user';
import GuestNavigationBar from './navigation-bars/guest';


const NavigationBar = ({ userType, emitNewUserType }) => {

    const logout = () => {
        localStorage.removeItem('role');
        emitNewUserType('');
        return <Redirect to='login'/>
    }
    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/main" 
                className="navbar-brand">
                    <img src={logo}
                        width="35"
                        height="30"
                        className="d-inline-block align-top"
                        alt="brand"/>
                </a>
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between"
                    id="navbarNav">
                    { userType === 'admin' && <AdminNavigationBar logout={logout} />}
                    { userType === 'user' && <UserNavigationBar logout={logout} />}
                    { userType !== 'admin' && userType !== 'user' && <GuestNavigationBar logout={logout} />}
                    <ul className="my-ul-search">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" value={searchTerm} onChange={(e => setSearchTerm(e.target.value))} placeholder="Search" aria-label="Search" />
                            <Link to={'/rdr/' + searchTerm} ><button  className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> </Link>
                        </form>
                    </ul>
                    <ul className="navbar-nav  " >
                        <li className="nav-item ">
                            <Link className="nav-link"
                                to='/contact'>Contact</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link"
                                to='/PrivacyPolicy'>Privacy Policy</Link>
                        </li>
                    </ul>


                </div>
            </nav>
        </div>
    );

}

export default NavigationBar;