import React from 'react';
import axios from '../api/axios';
import { SHA256 } from 'crypto-js';
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
            showPassword: false,
            showConfirmPassword: false,
            success: false,
            error: null
        }
    }

    signUp = async () => {
        if (this.state.password === this.state.confirmPassword) {
            try {
                await axios.post("/users", {
                    username: this.state.username,
                    password: SHA256(this.state.password).toString(),
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

    togglePassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };
    
    toggleConfirmPassword = () => {
        this.setState({ showConfirmPassword: !this.state.showConfirmPassword });
    };
    
    // End React State Setters

    render() {
        if (this.state.success) {
            return (
                <div>
                    <div className="success-icon-container"><i className="success success-icon fas fa-check-circle"></i></div>
                    <div className="success">Account created successfully!</div>
                </div>
            );
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
                            type={this.state.showPassword ? "text" : "password"}
                            value={this.state.password}
                            onChange={this.setPassword}
                        ></input>
                        <i 
                            className={`icon-right fas ${this.state.showPassword ? "fa-eye-slash" : "fa-eye"}`} 
                            onClick={this.togglePassword}
                        />
                    </div>
                    {/* Confirm Password */}
                    <div className="input">
                        <i className="icon fas fa-lock"></i>
                        <input
                            className="login-input" 
                            placeholder="confirm password" 
                            type={this.state.showConfirmPassword ? "text" : "password"}
                            value={this.state.confirmPassword}
                            onChange={this.setConfirmPassword}
                        ></input>
                        <i 
                            className={`icon-right fas ${this.state.showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`} 
                            onClick={this.toggleConfirmPassword} 
                        />
                    </div>
                    <div className="login-button-container">
                        <button className="login-button" onClick={this.signUp}>Sign Up</button>
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default SignUpForm;
