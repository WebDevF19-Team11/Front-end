import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo2.png"
import Can from '../config/Can'

export default class NaviagationBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event) {
        this.setState({title: event.target.value});
    }

    render() {
        let scope = this;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a href="/main" className="navbar-brand">
                        <img src={logo}
                            width="35"
                            height="30"
                            className="d-inline-block align-top"
                            alt="brand" />
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
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link"
                                    to='/main'>Home</Link>
                            </li>
                            
                             <Can do="see" a="offer">
                                 {()=>
                                    <li className="nav-item">
                                        <Link className="nav-link" 
                                        to='/offer'>Make an Offer</Link>
                                    </li>
                                }
                             </Can>
                             <Can do="see" a="login">
                                 {()=>
                                 <li className="nav-item">
                                    <Link className="nav-link"
                                        to='/login'>Login</Link>
                                </li>
                                }
                             </Can>
                             <Can do="see" a="register">
                                 {()=>
                                 <li className="nav-item">
                                 <Link className="nav-link"
                                     to='/register'>Register</Link>
                                </li>
                                }
                             </Can>
                             <Can I="see" a="adminPages">
                             {()=>
                                <li className="nav-item">
                                 <Link className="nav-link"
                                     to='/admin/Users'>Control users</Link>
                                </li>
                                }
                             </Can>
                             <Can I="see" a="adminPages">
                             {()=>
                                <li className="nav-item">
                                <Link className="nav-link"
                                    to='/admin/Items'>Control items</Link>
                                </li>
                                }
                             </Can>
                             <Can I="see" a="logout">
                                 {/* implement logout */}
                             {()=>
                                <li className="nav-item">
                                  <Link className="nav-link"
                                        to='main'>
                                            Logout
                                    </Link>
                                </li>
                                }
                             </Can>
                        </ul>
                        <ul className="my-ul-search">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" value={scope.state.title} onChange={scope.onSearchChange} placeholder="Search" aria-label="Search" />
                                <Link to={'/Search/rdr/' + scope.state.title} ><button  className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> </Link>
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

}