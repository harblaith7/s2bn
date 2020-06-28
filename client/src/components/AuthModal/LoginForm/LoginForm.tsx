import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login} from '../../../redux/actions/auth'
import Alert from '../../Alert/Alert';


interface IProps {
    switchStates: React.Dispatch<React.SetStateAction<boolean>>,
    login: (field: {email: string, password: string}) => void
}

interface IState {
    email: string,
    password: string
}

class LoginForm extends Component<IProps, IState> {

    constructor(props: IProps){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = async (e) => {
        e.preventDefault()
        const {email, password} = this.state
        this.props.login({
            email,
            password
        })
    }

    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        if(e.target.name === 'email'){
            this.setState({
                email: e.target.value
            })
        } else {
            this.setState({
                password: e.target.value
            })
        }
    }

    render() {
        return (
            <>
                <form className="AuthModal__form" onSubmit={this.handleSubmit}>
                    <input 
                        type="email" 
                        className="AuthModal__input" 
                        placeholder="Email"
                        name="email"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password" 
                        className="AuthModal__input" 
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange}
                    />
                    <input type="submit" className="AuthModal__submit" value="Log in"/>
                </form>
                <p className="AuthModal__switch" onClick={() => {
                    this.props.switchStates(false)
                }}>
                    Don't have an account? Sign up now!
                </p>
            </>
        )
    }
}

export default connect(null, {login})(LoginForm)