import React from 'react'

export default class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTitle: ''
        }
    }

    searchTitleChanged = event =>
        this.setState({
            searchTitle: event.target.value
        })

    render() {
        return(<div>
            <h2>Item list</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        onChange={this.searchTitleChanged}
                        value={this.state.searchTitle}
                        className="form-control"/>
                    <button
                        className="btn btn-primary">Search</button>
                </li>
               
            </ul>
        </div>)
    }
}
