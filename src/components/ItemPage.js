import React, { Component } from 'react'

export default class ItemPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="container-fluid t11-item-container">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src="https://images.homedepot-static.com/productImages/0b10f2de-892e-42b7-aed4-6fa738027a16/svn/storm-matte-formica-laminate-sheets-009121258512000-64_400_compressed.jpg"
                                class="card-img-top"
                                alt="Item Image" />
                        </div>
                        <div className="col-8 text-align-left">
                            <h2 className="t11-title-Exo bold-text">Item Title</h2>
                            <h5 className="t11-title-Exo">by Seller</h5>
                            <br></br>
                            <p>Price: <span>$XX.XX</span></p>
                            <br></br>
                            <h5 className="t11-title-Exo">Item Description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}