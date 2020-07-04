import React, { Component } from 'react'
import {connect} from 'react-redux'
import {register} from '../../../redux/actions/auth'

interface IProps {
    switchStates: React.Dispatch<React.SetStateAction<boolean>>
    register: (field: {email: string, password: string, firstName: string, lastName: string, confirmPassword: string, authenticationCode: string}) => void
}

interface IState {
    firstName : string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    authenticationCode: string
}

class SignUpForm extends Component<IProps, IState> {

    constructor(props: IProps){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            authenticationCode: ""
        }
    }

    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {
        e.preventDefault()
        const {firstName, lastName, email, password, confirmPassword, authenticationCode} = this.state
        let fields = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            authenticationCode
        }
        this.props.register(fields)
    }

    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        let field: keyof IState

        if(e.target.name === "firstName") {
            this.setState({
                firstName: e.target.value
            });
        } else if (e.target.name === "lastName") {
            this.setState({
                lastName: e.target.value
            });
        } else if (e.target.name === "email") {
            this.setState({
                email: e.target.value
            });
        } else if (e.target.name === "password") {
            this.setState({
                password: e.target.value
            });
        } else if (e.target.name === "confirmPassword") {
            this.setState({
                confirmPassword: e.target.value
            });
        } else if (e.target.name === "authenticationCode") {
            this.setState({
                authenticationCode: e.target.value
            });
        }

        
    }

    render() {
        return (
            <>
                <form className="AuthModal__form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        className="AuthModal__input" 
                        placeholder="First Name"
                        name="firstName"
                        onChange = {this.handleChange}
                        value={this.state.firstName}
                    />
                    <input 
                        type="text" 
                        className="AuthModal__input" 
                        placeholder="Last Name"
                        name="lastName"
                        onChange = {this.handleChange}
                        value={this.state.lastName}
                    />
                    <input 
                        type="text" 
                        className="AuthModal__input" 
                        placeholder="Email"
                        name="email"
                        onChange = {this.handleChange}
                        value={this.state.email}
                    />
                    <input 
                        type="password" 
                        className="AuthModal__input" 
                        placeholder="Password"
                        name="password"
                        onChange = {this.handleChange}
                        value={this.state.password}
                    />
                    <input 
                        type="password" 
                        className="AuthModal__input" 
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange = {this.handleChange}
                        value={this.state.confirmPassword}
                    />
                    <input 
                        type="password" 
                        className="AuthModal__input" 
                        placeholder="Authentication Code"
                        name="authenticationCode"
                        onChange = {this.handleChange}
                        value={this.state.authenticationCode}
                    />
                    <input type="submit" className="AuthModal__submit" value="Sign up"/>
                </form> 
                <p className="AuthModal__switch" onClick={() => {
                    this.props.switchStates(true)
                }}>
                    Already have an account? Log in now!
                </p> 
            </>
        )
    }
}

export default connect(null, {register})(SignUpForm)
