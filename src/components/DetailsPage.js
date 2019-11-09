import React from 'react'

export default class DetailsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
            
        }
    }
    componentDidUpdate() {

    }

    render() {
        return (<div>
            <h2>Item Details</h2>
            <div className="row">
                <div className="col-sm-6">
                    {/* <img src={this.props.movie.Poster}/> */}
                </div>
                <div className="col-sm-6">
               
                </div>
            </div>
           
        </div>)
    }
}
