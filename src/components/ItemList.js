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
        return (<div>
            <h2>Item list</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="input-group">
                        <input
                            onChange={this.searchTitleChanged}
                            value={this.state.searchTitle}
                            className="form-control" />
                        <button
                            className="btn btn-primary input-group-append">Search</button>
                    </div>
                </li>

            </ul>
        </div>)
    }
}
