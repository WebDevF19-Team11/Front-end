import React, { Component } from 'react'

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container-fluid  t11-container t11-Page">
                <h1 className="t11-title">Register</h1>
                <br />
                <div class="container">
                    <form className="">
                        <div className="row form-group">
                            <div className="col t11-register-col">
                                <label for="first-name">First name</label>
                                <input id="first-name"
                                        type="text" 
                                        className="form-control" 
                                        placeholder="First name" />
                            </div>
                            <div className="col t11-register-col">
                                <label for="Last-name">Last name</label>
                                <input id="Last-name" 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Last name"/>
                            </div>
                        </div>
                        <div className="form-group t11-register-col">
                        <label for="username">Username</label>
                            <input type="text"
                                className="form-control"
                                id="username"
                                name="usename"
                                placeholder="username" />
                        </div>
                        <div className="form-group t11-register-col">
                        <label for="signup-emailId">Email</label>
                            <input type="text"
                                className="form-control"
                                id="signup-emailId"
                                name="email"
                                placeholder="Email" />
                        </div>
                        <div className="form-group t11-register-col">
                        <label for="signup-passwordId">Password</label>
                            <input type="text"
                                className="form-control"
                                id="signup-passwordId"
                                name="password"
                                placeholder="Password" />
                        </div>
                        <button type="button" class="btn btn-light">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}