import React, { Component } from 'react'
import AuthModal from '../AuthModal/AuthModal'
import "./Header.scss"


export default class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="Header__container">
                    <div className="Header__text-container">
                        <h1 className="Header__text">
                           We help students gain a competitive edge in both school and business
                        </h1>
                        <div className="Header__btn-container">
                            <button className="Header__about-btn Header__about-btn--purple">
                                Our Events
                            </button>
                            <AuthModal/>
                        </div>
                    </div>
                    <div className="Header__upcoming-event-card">
                        <h4 className="Header__card-header">
                            Upcoming Events
                        </h4>
                        <h6 className="Header__event-name">
                            The S2BN Virtual Career Café
                        </h6>
                        <h5 className="Header__event-topic">
                            Management Consulting 
                        </h5>
                        <div className="Header__event-details-container">
                            <p className="Header__event-detail">
                                Wed. May 13th,2020
                            </p>
                            <p className="Header__event-detail">
                                6:00 - 7:00pm EDT
                            </p>
                            <p className="Header__event-detail">
                                Free Online Event
                            </p>
                            <button className="Header__register-btn">
                                Register now
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
