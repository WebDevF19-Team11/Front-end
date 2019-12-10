import React from 'react'
import CardGroup from "./CardGroup"
import BestBuyProductsService from '../Services/BestBuyProductsService';
import OfferService from '../Services/OfferService';
import OfferCardGroup from "./OfferCardGroup"


export default class MainItemView extends React.Component {
    constructor(props) {
        super(props);
        this.bestBuyService = new BestBuyProductsService();
        this.offerService = new OfferService();
        this.state = {
            products: [],
            offers: []
        }
    }

    componentDidMount() {
        let scope = this;
        this.bestBuyService.findAllProductsByTitle("samsung").then(response => {
            scope.setState({ products: response.products });
        });
        this.offerService.findAllOffers().then(result => { scope.setState({ offers: result }) });
    }

    render() {
        let scope = this;
        let start = 0;
        let end = 3;
        return (
            <div className="container-fluid">
                <h1 className="t11-title  text-align-center">Selorama | Sell, Rent-Out, or Give!</h1>
                <br />
                {scope.state.products.map((value, index) => {
                    if (index % 3 === 0) {
                        let cardGroup = <CardGroup key={index} products={scope.state.products.slice(start, end)} />
                        start += 3;
                        end += 3;
                        return cardGroup
                    }
                })}
                <br />
                <h2 className="text-align-center">Offers</h2>
                {scope.state.offers.map((value, index) => {
                    if (index % 3 === 0) {
                        let cardGroup = <OfferCardGroup key={index} products={scope.state.offers.slice(start, end)} />
                        start += 3;
                        end += 3;
                        return cardGroup;
                    }
                })

                }
            </div>
        );
    }

}