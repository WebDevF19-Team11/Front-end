import React from 'react'
import ItemList from '../components/ItemList'
import DetailsPage from '../components/DetailsPage'

export default class ProjectPrototype extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            item: {
                
            },
        }
    }

    findItemByTitle = title =>
        fetch(`https://webdev-neu-backend.herokuapp.com/api/amazon/product/?searchText=${title}`)
        .then(response => response.json())
        .then(response => {
            this.setState({
                items: response
            })
        });

    selectItem = item =>
    fetch(`https://webdev-neu-backend.herokuapp.com/api/amazon/product/${item}`)
        .then(response => response.json())
        .then(item => {
            console.log(item)
            this.setState({
                item: item
            })
        })

    componentDidMount() {
        this.findItemByTitle("k");
        this.selectItem("1");
    }
    render() {
        return (
            <div className="container">
                <h1 className="App-header">Project Prototype</h1>

                <div className="row content">
                    <div className="col-xl-6">
                        <ItemList
                         findItemByTitle={this.findItemByTitle}
                         selectItem={this.selectItem}
                         items={this.state.items}/>
                    </div>
                    <div className="col-xl-6">
                        <DetailsPage
                        item = {this.state.item}/>
                    </div>
                </div>
            </div>
        )
    }
}