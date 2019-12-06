import React, { Component } from 'react'

export default class SearchProductRedirectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.match.params.title
        }
        this.props.history.push('/Search/' + this.state.title)
    }

    render() {
        return <div></div>
    }
}