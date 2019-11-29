import React from 'react'
import NaviagationBar from "./NavigationBar"
import MainItemView from "./mainItemView"
import PrivacyPolicy from "./PrivacyPolicy"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ContactUsPage from './ContactUsPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import ItemPage from './ItemPage'
import ItemList from './ItemList'
import MakeOffer from './MakeOffer'
import ProfilePage from './ProfilePage'


export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>

                    <NaviagationBar />
                    <Route path='/ItemList' component={ItemList} />
                    <Route path='/ItemPage' component={ItemPage} />
                    <Route path='/main' component={MainItemView} />
                    <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
                    <Route path='/contact' component={ContactUsPage} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/register' component={RegisterPage} />
                    <Route path='/offer' component={MakeOffer}/>
                    <Route path='/profile' component={ProfilePage}/>


                </div>
            </Router>
        );
    }

}