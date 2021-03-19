import React from 'react';
import axios from '../api/axios';
import './LoginForm.css';

class SignUpForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            confirmPassword: "",
            success: false,
            error: null
        }
    }

    signUp = async () => {
        if (this.state.password === this.state.confirmPassword) {
            try {
                await axios.post("/users", {
                    username: this.state.username,
                    password: this.state.password,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName
                });
                this.setState({ success: true });
            } catch (e) {
                if (e.response && e.response.status === 401){ 
                    this.setState({ error: "An account with that username already exists!"});
                } else {
                    this.setState({ error: "Sorry, something went wrong. Please try again later. "});
                }
            }
        } else {
            this.setState({ error: "The passwords entered below do not match" })
        }
    };

    // React State Setters

    setFirstName = (e) => {
        this.setState({ firstName: e.target.value });
    }
    
    setLastName = (e) => {
        this.setState({ lastName: e.target.value });
    }

    setUsername = (e) => {
        this.setState({ username: e.target.value });
    };

    setPassword = (e) => {
        this.setState({ password: e.target.value });
    };

    setConfirmPassword = (e) => {
        this.setState({ confirmPassword: e.target.value });
    };
    
    // End React State Setters

    togglePassword = () => {

    };

    render() {
        if (this.state.success) {
            return <div class="success">Account created successfully!</div>
        } else {
            return (
                <React.Fragment>
                    {
                        this.state.error && 
                        <div className="login-error">
                            {this.state.error}
                        </div>
                    }
                    {/* First Name */}
                    <div className="input">
                        <i className="icon fas fa-user"></i>
                        <input 
                            className="login-input"
                            placeholder="first name"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.setFirstName}
                        ></input>
                    </div>
                    {/* Last Name */}
                    <div className="input">
                        <i className="icon fas fa-user"></i>
                        <input 
                            className="login-input"
                            placeholder="last name"
                            type="text"
                            value={this.state.lastName}
                            onChange={this.setLastName}
                        ></input>
                    </div>
                    {/* Username */}
                    <div className="input">
                        <i className="icon fas fa-user"></i>
                        <input 
                            className="login-input"
                            placeholder="user name"
                            type="text"
                            value={this.state.username}
                            onChange={this.setUsername}
                        ></input>
                    </div>
                    {/* Password */}
                    <div className="input">
                        <i className="icon fas fa-lock"></i>
                        <input
                            className="login-input" 
                            placeholder="password" 
                            type="password"
                            value={this.state.password}
                            onChange={this.setPassword}
                        ></input>
                        <i className="icon-right fas fa-eye" onClick={this.togglePassword}></i>
                    </div>
                    {/* Confirm Password */}
                    <div className="input">
                        <i className="icon fas fa-lock"></i>
                        <input
                            className="login-input" 
                            placeholder="confirm password" 
                            type="password"
                            value={this.state.confirmPassword}
                            onChange={this.setConfirmPassword}
                        ></input>
                        <i className="icon-right fas fa-eye" onClick={this.togglePassword}></i>
                    </div>
                    <button className="login-button" onClick={this.signUp}>Sign Up</button>
                </React.Fragment>
            );
        }
    }
}

export default SignUpForm;
