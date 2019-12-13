import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { setRole, authenticateUser } from '../Services/UserService';
import LoginService from '../Services/LoginService';

 class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username:"",
            password:"",
            userError: ''
        }
    }


    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    // submitLogin = () => {
    //    const user = authenticateUser(this.state.username, this.state.password);
    //    if (user) {
    //     setRole(user.role);
    //     this.props.emitNewUserType(user.role);
    //     this.props.history.push('/profile');
    //     return;
    //    }

    //    this.setState({userError: 'User not found', username: '', password: ''})
        
    // }

    submitLogin(){
        const loginService = new LoginService();
        loginService.login(this.state.username, this.state.password).then((user) => {
            localStorage.setItem("user", this.state.username);
            setRole(user.roles[0].toLowerCase());
            this.props.emitNewUserType(user.roles[0].toLowerCase());
            this.props.history.push('/profile');
        });
    }

    render() {
        const { userError } = this.state;
        return (
            <div class="container-fluid  t11-container t11-Page">
                <h1 className="t11-title">Log In</h1>
                <br />
                { userError && <h1 className="t11-title">{userError}</h1>}
                <div class="container">
                    <form className="">
                        <div className="form-group text-align-left">
                            <label for="username">Username</label>
                            <input type="text"
                                value={this.state.username}
                                onChange ={this.handleChange}
                                className="form-control"
                                id="login-emailId"
                                name="username"
                                placeholder="Your username.." />
                        </div>
                        <div className="form-group text-align-left">
                            <label for="password">Password</label>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                className="form-control"
                                id="login-passwordId"
                                name="password"
                                placeholder="Your password.." />
                        </div>
                        <button type="button"
                                onClick={()=> this.submitLogin()}
                                class="btn btn-light">
                                    Submit
                        </button>
                    </form>
                </div>
            </div>);
    }

}

export default withRouter(LoginPage)