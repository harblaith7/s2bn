import React, { Component } from 'react'
import MessageBoard from "../../components/MessageBoard/MessageBoard"
import "./MessagePage.scss"

export default class MessagePage extends Component {
    render() {
        return (
            <div className="MessagePage">
                <MessageBoard/>
            </div>
        )
    }
}
