import React, { Component } from 'react'

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container-fluid  t11-container t11-Page">
                <h1 className="t11-title">Sign Up</h1>
                <br />
                <div class="container">
                    <form className="">
                        <div className="row form-group">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                id="signup-emailId"
                                name="email"
                                placeholder="Your email.." />
                        </div>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                id="signup-passwordId"
                                name="password"
                                placeholder="Your password.." />
                        </div>
                        <button type="button" class="btn btn-light">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}