import React from 'react'
import ItemList from '../components/ItemList'
import DetailsPage from '../components/DetailsPage'

export default class ProjectPrototype extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {


    }
    render() {
        return (
            <div className="container">
                <h1>Project Prototype</h1>

                <div className="row">
                    <div className="col-xl-6">
                        <ItemList />
                    </div>
                    <div className="col-xl-6">
                        <DetailsPage />
                    </div>
                </div>

            </div>
        )
    }
}