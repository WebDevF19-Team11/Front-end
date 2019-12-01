import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from "../assets/logo2.png"
import Can from '../config/Can'

export default class NaviagationBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand">
                        <img src={logo}
                            width="35"
                            height="30"
                            class="d-inline-block align-top"
                            alt="" />
                    </a>
                    <button class="navbar-toggler" type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between"
                        id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className="nav-link"
                                    to='/main'>Home</Link>
                            </li>
                            
                             <Can do="see" a="offer">
                                 {()=>
                                    <li class="nav-item">
                                        <Link className="nav-link" 
                                        to='/offer'>Make an Offer</Link>
                                    </li>
                                }
                             </Can>
                             <Can do="see" a="login">
                                 {()=>
                                 <li class="nav-item">
                                    <Link className="nav-link"
                                        to='/login'>Login</Link>
                                </li>
                                }
                             </Can>
                             <Can do="see" a="register">
                                 {()=>
                                 <li class="nav-item">
                                 <Link className="nav-link"
                                     to='/register'>Register</Link>
                                </li>
                                }
                             </Can>
                             <Can I="see" a="adminPages">
                             {()=>
                                <li class="nav-item">
                                 <Link className="nav-link"
                                     to='/admin/Users'>Control users</Link>
                                </li>
                                }
                             </Can>
                             <Can I="see" a="adminPages">
                             {()=>
                                <li class="nav-item">
                                <Link className="nav-link"
                                    to='/admin/Items'>Control items</Link>
                                </li>
                                }
                             </Can>
                             <Can I="see" a="logout">
                                 {/* implement logout */}
                             {()=>
                                <li class="nav-item">
                                  <Link className="nav-link"
                                    to=''>Logout</Link>
                                </li>
                                }
                             </Can>
                        </ul>
                        <ul className="my-ul-search">
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </ul>
                        <ul class="navbar-nav  " >
                            <li class="nav-item ">
                                <Link className="nav-link"
                                    to='/contact'>Contact</Link>
                            </li>
                            <li class="nav-item ">
                                <Link className="nav-link"
                                    to='/PrivacyPolicy'>Privacy Policy</Link>
                            </li>
                        </ul>


                    </div>
                </nav>
            </div>
        );
    }

}