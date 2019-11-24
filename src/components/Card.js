import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div class="card">
                <Link className="" to='/ItemPage'>
                    <img src="https://images.homedepot-static.com/productImages/0b10f2de-892e-42b7-aed4-6fa738027a16/svn/storm-matte-formica-laminate-sheets-009121258512000-64_400_compressed.jpg"
                        height="150"
                        width="150"
                        class="card-img-top"
                        alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{this.props.title}</h5>
                        <p class="card-text">{this.props.text}</p>
                        <p class="card-text"><small class="text-muted">Last updated {this.props.time} mins ago</small></p>
                    </div>
                </Link>
            </div>
        )
    }
}
