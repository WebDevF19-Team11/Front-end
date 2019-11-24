import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from "../assets/logo2.png"
export default class NaviagationBar  extends React.Component {
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
            alt=""/>
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
        <li class="nav-item">
        <Link className="nav-link" 
                          to='/offer'>Make an Offer</Link>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Register</a>
        </li>
        </ul>
        <ul className="my-ul-search">
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
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