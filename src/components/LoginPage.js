import React, { Component } from 'react'
import LoginService from '../Services/LoginService';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username:"",
            password:""
        }
        this.submitLogin = this.submitLogin.bind(this);
    }

    usernameChanged = event =>
    this.setState({
        username: event.target.value
    })

    passwordChanged = event =>
    this.setState({
        password: event.target.value
    })

    submitLogin(){
        const scope = this;
        const loginService = new LoginService();
        loginService.login(this.state.username, this.state.password).then(response => { 
            localStorage.setItem('auth-token', response.idToken) ;
            this.props.history.push('/profile');
        });
    }

    render() {
        return (
            <div className="container-fluid  t11-container t11-Page">
                <h1 className="t11-title">Log In</h1>
                <br />
                <div className="container">
                    <form className="">
                        <div className="form-group text-align-left">
                            <label for="username">Username</label>
                            <input type="text"
                                value={this.state.username}
                                onChange ={this.usernameChanged}
                                className="form-control"
                                id="login-emailId"
                                name="username"
                                placeholder="Your username.." />
                        </div>
                        <div className="form-group text-align-left">
                            <label for="password">Password</label>
                            <input type="text"
                                value={this.state.password}
                                onChange={this.passwordChanged}
                                className="form-control"
                                id="login-passwordId"
                                name="password"
                                type="password"
                                placeholder="Your password.." />
                        </div>
                        <button type="button"
                                onClick={this.submitLogin}
                                className="btn btn-light">
                                    Submit
                        </button>
                    </form>
                </div>
            </div>);
    }

}