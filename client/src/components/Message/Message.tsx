import React, { Component } from 'react'
import './Message.scss'

export default class Message extends Component {
    render() {
        return (
            <div className="Message">
                <div className="Message__container">
                    <nav className="Message__nav">
                        <div className="Message__title-and-date-container">
                            <h4 className="Message__title">
                                I have a huge business offer
                            </h4>
                            <p className="Message__date">
                                2019-04-29
                            </p>
                        </div>
                        <div className="Message__status-btn-container">
                            <button className="Message__btn Message__btn--green">Mark as resolved</button>
                            <button className="Message__btn Message__btn--yellow">Mark as read</button>
                            <button className="Message__btn Message__btn--red">Delete message</button>
                        </div>
                    </nav>
                    <div className="Message__message-container">
                        
                    </div>
                </div>
            </div>
        )
    }
}
