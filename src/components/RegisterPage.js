import React, { Component } from 'react'
import passwordHash from "password-hash";
import { Redirect } from 'react-router-dom'

import UserService from '../Services/UserService';
let userService = UserService.getInstance();

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname:"",
            lastname:"",
            username:"",
            email:"",
            password:""
        }
    }
    submitRegister(){
       let hashedPassword =  passwordHash.generate(this.state.password);
        let newUser = {
            "firstname": this.state.firstname,
            "name": this.state.lastname,
            "pw": hashedPassword,
            "username": this.state.username,
            "offerList": []
        }
        userService.createNewUser(newUser).then(response => {
            if(response == "done"){
                this.props.history.push('/login')
            }
            else {
                alert("Error, please try again!");
            }
        })
    }

    firstnameChanged = event =>
    this.setState({
        firstname: event.target.value
    })

    lastnameChanged = event =>
    this.setState({
        lastname: event.target.value
    })

    usernameChanged = event =>
    this.setState({
        username: event.target.value
    })

    emailChanged = event =>
    this.setState({
        email: event.target.value
    })

    passwordChanged = event =>
    this.setState({
        password: event.target.value
    })
    

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
                                        value={this.state.firstname}
                                        onChange={this.firstnameChanged}
                                        type="text" 
                                        className="form-control" 
                                        placeholder="First name" />
                            </div>
                            <div className="col t11-register-col">
                                <label for="Last-name">Last name</label>
                                <input id="Last-name"
                                        onChange={this.lastnameChanged}
                                        value={this.state.lastname} 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Last name"/>
                            </div>
                        </div>
                        <div className="form-group t11-register-col">
                        <label for="username">Username</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.username}
                                onChange={this.usernameChanged}
                                id="username"
                                name="usename"
                                placeholder="username" />
                        </div>
                        <div className="form-group t11-register-col">
                        <label for="signup-emailId">Email</label>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.emailChanged}
                                className="form-control"
                                id="signup-emailId"
                                name="email"
                                placeholder="Email" />
                        </div>
                        <div className="form-group t11-register-col">
                        <label for="signup-passwordId">Password</label>
                            <input type="text"
                                value={this.state.password}
                                onChange={this.passwordChanged}
                                className="form-control"
                                id="signup-passwordId"
                                name="password"
                                placeholder="Password" />
                        </div>
                        <button type="button"
                                onClick={()=> {
                                    this.submitRegister()
                                }}
                                class="btn btn-light">
                             Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}