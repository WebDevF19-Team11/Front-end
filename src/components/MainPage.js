import React from 'react'
import NaviagationBar from "./NavigationBar"
import MainItemView from "./mainItemView"
import PrivacyPolicy from "./PrivacyPolicy"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <Router>
                <div>
                    <NaviagationBar/>
                    <Route path='/main' component={MainItemView}/>
                    <Route path='/PrivacyPolicy' component={PrivacyPolicy}/>
                </div>
            </Router>
        );
    }

}