import React, { Component } from 'react'
import './Message.scss'
import {connect} from 'react-redux'

interface IProps {
    messages: {
        _id: string,
        date: string,
        name: string,
        title: string,
        email: string,
        message: string
    }[]
    messageId: string
}

interface IState {
    message: {
        _id: string,
        date: string,
        name: string,
        title: string,
        email: string,
        message: string
    }
}

class Message extends Component<IProps, IState> {   

    constructor(props: IProps){
        super(props)
        this.state = {
            message: {
                _id: "",
                date: "",
                name: "",
                title: "",
                email: "",
                message: ""
            }
        }
    }

    componentDidUpdate = (prevProps: IProps) => {
        if(prevProps.messageId !== this.props.messageId){
            let currentMessage = this.props.messages.find(message => {
                return message._id === this.props.messageId
            })
            if(currentMessage)
            this.setState({
                message: currentMessage
            })
        }
    }

    render() {
        const {title, message, email, date, name} = this.state.message
        return (
            <div className="Message">
                <div className="Message__container">
                    <nav className="Message__nav">
                        <div className="Message__title-and-date-container">
                            <h4 className="Message__title">
                                {title}
                            </h4>
                            <p className="Message__date">
                                {date}
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

const mapStateToProps = (state: any) => ({
    messages: state.messages.messages,
    messageId: state.currentMessageId
})


export default connect(mapStateToProps)(Message)