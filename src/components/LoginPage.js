import React, { Component } from 'react'

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container-fluid  t11-container t11-Page">
                <h1 className="t11-title">Log In</h1>
                <br />
                <div class="container">
                    <form className="">
                        <div className="form-group text-align-left">
                            <label for="email">Email</label>
                            <input type="text"
                                className="form-control"
                                id="login-emailId"
                                name="email"
                                placeholder="Your email.." />
                        </div>
                        <div className="form-group text-align-left">
                            <label for="password">Password</label>
                            <input type="text"
                                className="form-control"
                                id="login-passwordId"
                                name="password"
                                placeholder="Your password.." />
                        </div>
                        <button type="button" class="btn btn-light">Submit</button>
                    </form>
                </div>
            </div>);
    }

}