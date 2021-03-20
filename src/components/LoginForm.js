import React from 'react';
import axios from '../api/axios';
import { SHA256 } from 'crypto-js';
import './LoginForm.css';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            showPassword: false,
            error: null
        }
    }

    login = async () => {
        // FOR DEVELOPMENT TESTING - remove later
        if (this.state.username === "test@test.com" && this.state.password === "password") {
            localStorage.setItem("token", true);
            window.location.reload();
        } else {
            try {
                const response = await axios.post("/login", {
                    username: this.state.username,
                    password: SHA256(this.state.password).toString()
                });
                localStorage.setItem('token', response.data.token);
                window.location.reload();
                
            } catch (e) {
                this.setState({ error: "Invalid Username and/or Password" });
            }
        }
    };

    signUp = () => {
        this.setState({ signUp: true });
    };

    setUsername = (e) => {
        this.setState({ username: e.target.value });
    };

    setPassword = (e) => {
        this.setState({ password: e.target.value });
    };

    togglePassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    render() {
        return (
            <React.Fragment>
                {
                    this.state.error && 
                    <div className="login-error">
                        {this.state.error}
                    </div>
                }
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
                <div className="login-button-container">
                    <button className="login-button" onClick={this.login}>Sign In</button>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginForm;
