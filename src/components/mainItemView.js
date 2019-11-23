import React from 'react'
import NaviagationBar from "./NavigationBar"
import CardGroup from "./CardGroup"

export default class MainItemView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
                <div class="mx-auto">
                    <h3>
                        Selorama | Sell, rent-out, or give!
                    </h3>
                    <div className="container">
                        <CardGroup/>
                        <CardGroup/>
                    </div>
                    
                </div>
        );
    }

}