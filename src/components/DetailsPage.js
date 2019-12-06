import React from 'react'
export default class DetailsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {
                
            },
            
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState)
        console.log(this.props.item)
        if(prevState.item !== this.props.item) {
            console.log(this.state.item.largeImageUrl)
            this.setState({
                item: this.props.item
            })
        }
    }
    render() {
        return (<div>
            <h2>Item Details:</h2>
            <div>
                <img src={"http://"+this.state.item.largeImageUrl} alt="img-url"/>
                <h3>Item group:</h3>
                    <h4>
                        {this.state.item.productGroup}
                    </h4>
                <h3>Item Name:</h3>
                    <h4>
                        {this.state.item.title}
                    </h4>
                <h3>Item author:</h3>
                <h4>
                    {this.state.item.author}
                </h4>
                <h3>Item Amazon url:</h3>
                <a href={this.state.item.url}>Click here</a>
            </div>           
        </div>)
    }
}
