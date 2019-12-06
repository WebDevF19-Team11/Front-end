import React from 'react'
import NaviagationBar from "./NavigationBar"
import MainItemView from "./mainItemView"
import PrivacyPolicy from "./PrivacyPolicy"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ContactUsPage from './ContactUsPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import ItemPage from './ItemPage'
import ItemList from './ItemList'
import MakeOffer from './MakeOffer'
import AdminPage from './AdminPage'
import ProfilePage from './profilePage'
import SearchProductPage from './SearchProductPage'
import SearchProductRedirectPage from './SearchProductRedirectPage'
export default class MainPage extends React.Component {
    render() {
        return (
            <Router>
                <div>

                    <NaviagationBar />
                    <Route path='/ItemList' component={ItemList} />
                    <Route path='/ItemPage/:sku' component={ItemPage} />
                    <Route path='/main' component={MainItemView} />
                    <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
                    <Route path='/contact' component={ContactUsPage} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/register' component={RegisterPage} />
                    <Route path='/offer' component={MakeOffer}/>
                    <Route path='/profile' component={ProfilePage}/>
                    <Route path='/Admin' component={AdminPage}/>
                    <Route path='/Search/:title' component={SearchProductPage}/>
                    <Route path='/Search/rdr/:title' component={SearchProductRedirectPage}/>
                </div>
            </Router>
        );
    }
}