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
        return (
            <div>
                <h2>Item list</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="input-group">
                            <input
                                onChange={this.searchTitleChanged}
                                value={this.state.searchTitle}
                                className="form-control" />
                            <button
                                onClick={() => this.props.findItemByTitle(this.state.searchTitle)}
                                className="btn btn-primary input-group-append">Search</button>
                        </div>
                    </li>
                    {
                        this.props.items.map(item =>
                            <div>
                                <li onClick={() => this.props.selectItem(item.id)}
                                    className="list-group-item"
                                    key={item.id}>
                                    <div className="col-2">
                                        <img src={"http://" + item.urlPictureSmall} alt="url-pic" />
                                    </div>
                                    <div className="col-10">
                                        {item.title}
                                    </div>
                                </li>
                            </div>
                        )
                    }
                </ul>
            </div>)
    }
}
