import React, { Component } from 'react'
import BestBuyProductsService from '../Services/BestBuyProductsService';
import CardGroup from "./CardGroup"

export default class SearchProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            title: props.match.params.title
        }
        this.bestBuyProductsService = new BestBuyProductsService();
    }

    componentWillMount() {
        let scope = this;
        this.bestBuyProductsService.findAllProductsByTitle(scope.state.title).then(response => { 
            scope.setState({ products: response.products }); 
        });
    }

    render() {
        let scope = this;
        let start = 0;
        let end = 3;
        return (
            <div className="container-fluid">
                <h1 className="t11-title  text-align-center">Selorama | Sell, Rent-Out, or Give!</h1>
                <br/>
                { scope.state.products.map((value, index) => {
                    if (index % 3 === 0) {
                        let cardGroup = <CardGroup key={index} products={scope.state.products.slice(start, end)}/>
                        start += 3;
                        end += 3;
                        return cardGroup
                    }
                })}
            </div>
        );
    }
}