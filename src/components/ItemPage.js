import React, { Component } from 'react'
import BestBuyProductsService from '../Services/BestBuyProductsService';

export default class ItemPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sku: props.match.params.sku
        }
        this.bestBuyProductsService = new BestBuyProductsService();
    }

    componentWillMount() {
        let scope = this;
        this.bestBuyProductsService.findProductBySKU(this.state.sku).then( response => {
            scope.setState({product: response.products[0]})
        });
    }

    getProperty(property) {
        if (this.state.product === undefined) 
            return undefined
        else {
            return this.state.product[property];
        }
    }

    render() {
        let scope = this;
        return (
            <div className="container-fluid t11-item-container">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img height="400" src={scope.getProperty('largeImage')}
                                className="card-img-top"
                                alt="Item" />
                        </div>
                        <div className="col-8 text-align-left">
                            <h2 className="t11-title-Exo bold-text">{scope.getProperty('name')}</h2>
                            <h5 className="t11-title-Exo">{scope.getProperty('manufacturer')}</h5>
                            <br></br>
                            <p>Price: <span>${scope.getProperty('salePrice')}</span></p>
                            <br></br>
                            <h5 className="t11-title-Exo">{scope.getProperty('longDescription')}</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}