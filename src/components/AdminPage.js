import React from 'react'
import AdminUserControlPage from './AdminUserControlPage';
import AdminItemControlPage from './AdminItemControlPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class AdminPage extends React.Component {
    render() {
        return ( 
            <div class="container-fluid t11-container t11-adminPage">        
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