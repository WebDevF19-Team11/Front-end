import React from 'react'
import Card from "./Card"

export default class CardGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products : props.products || []
        }
    }

   

    getName(index) {
        if (this.state.products.length === 0) {
            return undefined;
        } else if (this.state.products[index]){
            return this.state.products[index].name;
        }
    } 

    getPrice(index) {
        if (this.state.products.length === 0) {
            return undefined;
        } else if (this.state.products[index]){
            return this.state.products[index].salePrice;
        }
    }

    render() {
        let scope = this;
        return (
            <div className="card-group">
                { scope.state.products.map((value, index) => {
                  return <Card key={index} title={scope.getName(index)} text={scope.getPrice(index)} sku={value.sku} time={index}/>
                })}
                {/* <Card title={scope.getName(0) || "test1"} text={scope.getPrice(0) || "this is the item's description"} time="10" />
                <Card title={scope.getName(1) || "test1"} text={scope.getPrice(1) || "this is the item's description"} time="13" />
                <Card title={scope.getName(2) || "test1"} text={scope.getPrice(2) || "this is the item's description"} time="6" /> */}
            </div>
            
        )
    }
}
