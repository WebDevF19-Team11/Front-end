import React from 'react'
import Card from "./Card"
import OfferService from '../Services/OfferService';
import LoginService from '../Services/LoginService';

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                followers: [],
                following: [],
                roles: [ "DEFAULT" ]
            },
            offers: []
        }
    }
    componentDidMount() {
        const offerService = new OfferService();
        const loginService = new LoginService();

        loginService.getLoggedUser().then(user => this.setState({ user: user })).then(() => 
            offerService.findAllBySellerUsername(this.state.user.username).then(offers => this.setState({offers: offers}))
        );
    }

    render() {
        return (
            <div className="container-fluid t11-item-container">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src="https://images.homedepot-static.com/productImages/0b10f2de-892e-42b7-aed4-6fa738027a16/svn/storm-matte-formica-laminate-sheets-009121258512000-64_400_compressed.jpg"
                                className="card-img-top"
                                class="card-img-top"
                                alt="Item" />
                        </div>
                        <div className="col-8 text-align-left">
                            <h2 className="t11-title-Exo bold-text">{this.state.user.username} ({this.state.user.type})</h2>
                            <br/>
                            <h5 className="col-8 text-align-left">First Name: {this.state.user.firstName}</h5>
                            <h5 className="col-8 text-align-left">Last Name: {this.state.user.lastName}</h5>
                            <h5 className="col-8 text-align-left">Followers: {this.state.user.followers.map(fl => {return fl + ', '})}</h5>
                            <h5 className="col-8 text-align-left">Following: {this.state.user.following.map(fl => {return fl + ', '})}</h5>
                            <h5 className="col-8 text-align-left">Roles: {this.state.user.roles[0]}</h5>

                            <h5 className="t11-title-Exo">User Bio</h5>
                            <h5 className="t11-title-Exo">Items</h5>
                            { this.state.offers.map((offer, index) => {
                                
                                return <Card key={index} title={offer.item.title} text={offer.item.description} price={'$' + offer.price} quantity={'Quantity: ' + offer.quantity} time="10"/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}