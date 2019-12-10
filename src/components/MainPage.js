import React  , {useEffect} from 'react'
import NaviagationBar from "./NavigationBar"
import MainItemView from "./mainItemView"
import PrivacyPolicy from "./PrivacyPolicy"
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
import UserService from '../Services/UserService';
import { Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-hooks';

let userService = UserService.getInstance();

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userType: "A"
        }
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <div>
                            <NaviagationBar userType={this.state.userType}/>
                            <Route path='/ItemList' 
                            component={ItemList}/>
                            <Route path='/ItemPage/:sku' 
                            component={ItemPage}/>
                            <Route path='/main' 
                            component={MainItemView}/>
                            <Route path='/PrivacyPolicy' 
                            component={PrivacyPolicy}/>
                            <Route path='/contact' 
                            component={ContactUsPage}/>
                            <Route path='/login' 
                            component={LoginPage}/>
                            <Route path='/register' 
                            component={RegisterPage}/>
                            <Route path='/offer' 
                            component={MakeOffer}/>
                            <Route path='/Admin' 
                            component={AdminPage}/>
                            <Route path='/profile' 
                            component={ProfilePage}/>
                            <Route path='/Search/:title' 
                            component={SearchProductPage}/>
                            <Route path='/rdr/:title' 
                            component={SearchProductRedirectPage}/>
                    </div>
                </Switch>
            </BrowserRouter>

        );
    }
}