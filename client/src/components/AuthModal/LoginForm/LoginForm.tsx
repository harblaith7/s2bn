import React, { Component } from 'react'

interface IProps {
    switchStates: React.Dispatch<React.SetStateAction<boolean>>
}

export default class LoginForm extends Component<IProps> {
    render() {
        return (
            <>
                <form className="AuthModal__form">
                    <input type="email" className="AuthModal__input" placeholder="Email"/>
                    <input type="password" className="AuthModal__input" placeholder="Password"/>
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
