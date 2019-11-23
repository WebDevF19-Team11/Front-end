import React from 'react'
import Card from "./Card"

export default class CardGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
   
        }
    }
    render() {
        return (
        <div class="card-group">
            <Card title="test1" text="this is the item's description" time="10"/>
            <Card title="test2" text="this is the item's description" time="13"/>
            <Card title="test3" text="this is the item's description" time="6"/>
        </div>
        )
    }
}
