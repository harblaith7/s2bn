import React, { Component } from 'react'
import "./ContactHeader.scss"
import mail from "../../assets/images/svg/mail.svg"

export default class ContactHeader extends Component {
    render() {
        return (
            <div className="ContactHeader">
                <div className="ContactHeader__container">
                    <h2 className="ContactHeader__heading">
                        Have Some Questions?
                    </h2>
                    <div className="ContactHeader__form-container">
                        <form className="ContactHeader__form">
                            <input type="text" className="ContactHeader__input" placeholder="Name"/>
                            <input type="text" className="ContactHeader__input" placeholder="Email"/>
                            <textarea className="ContactHeader__textarea" placeholder="Your message to us"></textarea>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
