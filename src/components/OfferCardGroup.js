import React from 'react'
import { Link } from 'react-router-dom'

export default class OfferCardGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products || []
        }
    }

    getItemId(index) {
        if (this.state.products.length === 0) {
            return undefined;
        } else if (this.state.products[index]) {
            return this.state.products[index].item.itemId;
        }
    }

    getTitle(index) {
        if (this.state.products.length === 0) {
            return undefined;
        } else if (this.state.products[index]) {
            return this.state.products[index].item.title;
        }
    }

    getDescription(index) {
        if (this.state.products.length === 0) {
            return undefined;
        } else if (this.state.products[index]) {
            return this.state.products[index].item.description;
        }
    }
    getPrice(index) {
        if (this.state.products.length === 0) {
            return undefined;
        } else if (this.state.products[index]) {
            console.log(this.state.products[index])
            return this.state.products[index].price;
        }
    }

    render() {
        let scope = this;
        return (
            <div className="card-group">
                {scope.state.products.map((value, index) => {
                    return (
                        <div className="card card-padding border-light" key={index}>
                            <Link className="" to={'/ItemPage/' + scope.getItemId(index)}>
                                <img src="https://images.homedepot-static.com/productImages/0b10f2de-892e-42b7-aed4-6fa738027a16/svn/storm-matte-formica-laminate-sheets-009121258512000-64_400_compressed.jpg"
                                    height="150"
                                    width="150"
                                    className="card-img-top"
                                    alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{scope.getTitle(index)}</h5>
                                    <p className="card-text">{scope.getDescription(index)}</p>
                                    <p className="card-text"><small className="text-muted">Price: {scope.getPrice(index)}</small></p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>

        )
    }
}
