import React from 'react'
import { Link } from 'react-router-dom'

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sku: props.sku
        }
    }



    render() {
        const scope = this;
        return (
            <div className="card">
                <Link className="" to={ '/ItemPage/' + this.state.sku }>
                    <img src="https://images.homedepot-static.com/productImages/0b10f2de-892e-42b7-aed4-6fa738027a16/svn/storm-matte-formica-laminate-sheets-009121258512000-64_400_compressed.jpg"
                        height="150"
                        width="150"
                        className="card-img-top"
                        alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.text}</p>
                        <p className="card-text">{scope.props.price}</p>
                        <p className="card-text">{scope.props.quantity}</p>
                        <p className="card-text"><small className="text-muted">Last updated {this.props.time} mins ago</small></p>
                    </div>
                </Link>
            </div>
        )
    }
}
