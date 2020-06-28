import React, { Component } from 'react'

interface IProps {
    switchStates: React.Dispatch<React.SetStateAction<boolean>>
}

export default class SignUpForm extends Component<IProps> {
    render() {
        return (
            <>
                <form className="AuthModal__form">
                    <input type="text" className="AuthModal__input" placeholder="First Name"/>
                    <input type="text" className="AuthModal__input" placeholder="Last Name"/>
                    <input type="text" className="AuthModal__input" placeholder="Email"/>
                    <input type="text" className="AuthModal__input" placeholder="Password"/>
                    <input type="text" className="AuthModal__input" placeholder="Confirm Password"/>
                    <input type="text" className="AuthModal__input" placeholder="Authentication Code"/>
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
