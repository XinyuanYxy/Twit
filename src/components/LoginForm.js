import React from 'react';
import axios from '../api/axios';
import './LoginForm.css';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            error: null
        }
    }

    login = async () => {
        try {
            const response = await axios.post("/login", {
                username: this.state.username,
                password: this.state.password
            });
            localStorage.setItem('token', response.data.token);
            window.location.reload();
            
        } catch (e) {
            this.setState({ error: "Invalid Username and/or Password"});
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
                        type="password"
                        value={this.state.password}
                        onChange={this.setPassword}
                    ></input>
                    <i className="icon-right fas fa-eye" onClick={this.togglePassword}></i>
                </div>
                <button className="login-button" onClick={this.login}>Sign In</button>
                <button className="forgot-password">Forgot password</button>
            </React.Fragment>
        );
    }
}

export default LoginForm;
