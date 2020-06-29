import React, { Component } from 'react'
import "./MessageBoard.scss"

export default class MessageBoard extends Component {
    render() {
        return (
            <div className="MessageBoard">
                <div className="MessageBoard__container">
                    <h4 className="MessageBoard__header">
                        All Messages
                    </h4>
                    <div className="MessageBoard__messages-container">
                        <div className="MessageBoard__message-container">
                            <div className="MessageBoard__message-status"></div>
                            <div className="MessageBoard__info-container">
                                <div className="MessageBoard__name-date-container">
                                    <p className="MessageBoard__message-name">
                                        Julia Grein
                                    </p>
                                    <p className="MessageBoard__message-date">
                                        2019 27 09
                                    </p>
                                </div>
                                <h4 className="MessageBoard__message-title">
                                    I want to volunteer
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
