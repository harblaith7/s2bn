import React, { Component } from 'react'
import "./MessageBoard.scss"
import {getAllMessages} from '../../redux/actions/messages'
import {connect} from 'react-redux'
import axios from 'axios'

interface IProps {
    getAllMessages: () => void,
    messages: {
        messages: {
            id: string,
            name: string,
            email: string,
            title: string,
            message: string,
            date: string
        }[]
    }
}

class MessageBoard extends Component<IProps> {

    componentDidMount(){       
        this.props.getAllMessages()
    }

    displayMessages: () => JSX.Element[] = () => {
        return this.props.messages.messages.reverse().map(message => {
            return (
                <div className="MessageBoard__message-container">
                    <div className="MessageBoard__message-status"></div>
                    <div className="MessageBoard__info-container">
                        <div className="MessageBoard__name-date-container">
                            <p className="MessageBoard__message-name">
                                {message.name}
                            </p>
                            <p className="MessageBoard__message-date">
                                {message.date}
                            </p>
                        </div>
                        <h4 className="MessageBoard__message-title">
                            {message.title}
                        </h4>
                    </div>
                </div>
            )
        })
        
    }

    render() {
        return (
            <div className="MessageBoard">
                <div className="MessageBoard__container">
                    <h4 className="MessageBoard__header">
                        All Messages
                    </h4>
                    <div className="MessageBoard__messages-container">
                        {this.displayMessages()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    messages: state.messages
})

export default connect(mapStateToProps, {getAllMessages})(MessageBoard)