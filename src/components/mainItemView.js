import React from 'react'
import CardGroup from "./CardGroup"


export default class MainItemView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <h1 className="t11-title  text-align-center">Selorama | Sell, Rent-Out, or Give!</h1>
                <br/>
                <CardGroup />
                <br/>
                <CardGroup />
            </div>
        );
    }

}