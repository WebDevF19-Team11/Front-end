import React from 'react'
import Card from "./Card"
import UserService from '../Services/UserService';
let userService = UserService.getInstance();

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user :""
        }
    }
    componentDidMount() {
        this.state.user = userService.getCurrentUser();
    }

    render() {
        return (
            <div className="container-fluid t11-item-container">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src="https://images.homedepot-static.com/productImages/0b10f2de-892e-42b7-aed4-6fa738027a16/svn/storm-matte-formica-laminate-sheets-009121258512000-64_400_compressed.jpg"
                                className="card-img-top"
                                alt="Item" />
                        </div>
                        <div className="col-8 text-align-left">
        <h2 className="t11-title-Exo bold-text">{userService.getCurrentUser().username}</h2>
                            <br/>
                            <h5 className="col-8 text-align-left">First Name: {userService.getCurrentUser().firstname}</h5>
                            <h5 className="col-8 text-align-left">Last Name: {userService.getCurrentUser().name}</h5>
{/*                             
                            <h5 className="t11-title-Exo">Items</h5>
                            { userService.getCurrentUser().offers.map((offer, index) => {
                                
                                return <Card key={index} title={offer.item.title} text={offer.item.description} price={'$' + offer.price} quantity={'Quantity: ' + offer.quantity} time="10"/>
                            })} */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}