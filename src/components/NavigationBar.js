import React from 'react'
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
    <a class="navbar-brand" href="#">Selorama</a>
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
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Make an offer</a>
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
                <a class="nav-link " href="#">Contact us</a>
            </li>
            <li class="nav-item ">
                    <a class="nav-link" href="#">Privacy Policy</a>
            </li>
        </ul>
       
        
    </div>
    </nav>
</div>
        );
    }

}