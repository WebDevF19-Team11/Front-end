import React, { Component } from 'react'
import OfferService from '../Services/OfferService';
let offerService = OfferService.getInstance();

export default class MakeOffer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            offerType: "",
            name: "",
            description: "",
            price: "",
            quant: "",
        }
    }

    nameChange = event =>
        this.setState({
            name: event.target.value
        });

    typeChange = event =>
        this.setState({
            offerType: event.target.value
        });

    descriptionChange = event =>
        this.setState({
            description: event.target.value
        });

    priceChange = event =>
        this.setState({
            price: event.target.value
        });

    quantChange = event =>
        this.setState({
            quant: event.target.value
        });

    offerSubmit() {
        let newItem = {
            "title": this.state.name,
            "description": this.state.description,
        }
        let newOffer = {
            "item": newItem,
            "price": this.state.price,
            "quantity": this.state.quant
        }

        offerService.createNewOffer(newOffer);
    }


    render() {
        return (
            <div class="container-fluid t11-container t11-offer-form">
                <h1 className="t11-privacy-title">Make an Offer</h1>
                <h5 className="t11-privacy-title">Selling, renting-out, and giving made easy!</h5>
                <form>
                    <div className="t11-offer-form">
                        <label for="type-select">Select offer type</label>
                        <select id="type-select"
                            value={this.state.offerType}
                            onChange={this.typeChange}
                            class="custom-select">
                            <option value="S">Select an offer type</option>
                            <option value="S">Selling</option>
                            <option value="R">Renting-out</option>
                            <option value="G">Giving for free!</option>
                        </select>
                    </div>
                    <div class="form-group t11-offer-form">
                        <label for="itemName">Item's name</label>
                        <input type="text"
                            value={this.state.name}
                            onChange={this.nameChange}
                            class="form-control"
                            id="itemName"
                            placeholder="Name" />
                    </div>
                    <div class="form-group t11-offer-form">
                        <label for="description">Item's description</label>
                        <input type="text"
                            value={this.state.description}
                            onChange={this.descriptionChange}
                            class="form-control"
                            id="description"
                            placeholder="Description" />
                    </div>
                    <div className="row form-group t11-offer-form">
                        <div className="col t11-register-col t11-offer-form">
                            <label for="Price">Price</label>
                            <input id="Price"
                                onChange={this.priceChange}
                                value={this.state.price}
                                type="number"
                                className="form-control"
                                placeholder="$-.-" />
                        </div>
                        <div className="col t11-register-col t11-offer-form">
                            <label for="quantity">Quantity</label>
                            <input id="quantity"
                                value={this.state.quant}
                                onChange={this.quantChange}
                                type="number"
                                className="form-control"
                                placeholder="Quantity" />
                        </div>
                    </div>
                </form>
                <form>
                    <div class="form-group t11-offer-form">
                        <label for="file">Upload an Image</label>
                        <input type="file"
                            class="form-control-file"
                            id="file" />
                    </div>
                </form>
                <center>
                    <button type="button"
                        onClick={() => this.offerSubmit()}
                        class="btn btn-light t11-offer-form-btn">
                        Submit
                    </button>
                </center>
            </div>
        );
    }

}