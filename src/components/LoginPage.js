import React, { Component } from 'react'

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email:"",
            pw:""
        }
    }

    emailChanged = event =>
    this.setState({
        email: event.target.value
    })

    passwordChanged = event =>
    this.setState({
        pw: event.target.value
    })

    submitLogin(){

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
                                value={this.state.email}
                                onChange ={this.emailChanged}
                                className="form-control"
                                id="login-emailId"
                                name="email"
                                placeholder="Your email.." />
                        </div>
                        <div className="form-group text-align-left">
                            <label for="password">Password</label>
                            <input type="text"
                                value={this.state.pw}
                                onChange={this.passwordChanged}
                                className="form-control"
                                id="login-passwordId"
                                name="password"
                                placeholder="Your password.." />
                        </div>
                        <button type="button"
                                onClick={this.submitLogin}
                                class="btn btn-light">
                                    Submit
                        </button>
                    </form>
                </div>
            </div>);
    }

}