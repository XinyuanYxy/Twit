import React from 'react'
import './Login.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            signUp: false,
        }
    }

    toggleSignUp = () => {
        this.setState({ signUp: !this.state.signUp });
    }

    render() {
        return (
            <div className="login-page">
                <div className="splash">
                    <img className="centre tweeter-logo" src="logo.png"></img>
                </div>
                <div className="login">
                    <div className="centre">
                        { this.state.signUp ?  <SignUpForm /> : <LoginForm /> }
                        <div className="sign-up-section">
                            <a className="sign-up" onClick={this.toggleSignUp}>
                                {this.state.signUp ? "Return to Login" : "Sign up"}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;