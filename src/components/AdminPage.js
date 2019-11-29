import React from 'react'
import AdminUserControlPage from './AdminUserControlPage';
import AdminItemControlPage from './AdminItemControlPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class AdminPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return ( 
            <div class="container-fluid t11-container t11-contactPage">        
                <h1 className="t11-privacy-title">Admin Control</h1>
            <div class="">
            <Router>
                <Route path='/Admin/Users' component={AdminUserControlPage}/>
                <Route path='/Admin/Items' component={AdminItemControlPage}/>
            </Router>
            </div>
            </div>
        );
    }

}