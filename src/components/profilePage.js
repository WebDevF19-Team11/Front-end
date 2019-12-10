import React from 'react'
import Card from "./Card"


export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
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
        <h2 className="t11-title-Exo bold-text">{this.props.user.username}</h2>
                            <br/>
                            <h5 className="col-8 text-align-left">First Name: {this.props.user.firstName}</h5>
                            <h5 className="col-8 text-align-left">Last Name: {this.props.user.lastName}</h5>
                            
                            <h5 className="t11-title-Exo">Items</h5>
                            {/* { this.state.offers.map((offer, index) => {
                                
                                return <Card key={index} title={offer.item.title} text={offer.item.description} price={'$' + offer.price} quantity={'Quantity: ' + offer.quantity} time="10"/>
                            })} */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}