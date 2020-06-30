import React, { Component } from 'react'
import "./MessageBoard.scss"
import {getAllMessages} from '../../redux/actions/messages'
import {connect} from 'react-redux'
import MessageCard from '../MessageCard/MessageCard'
import axios from 'axios'

interface IProps {
    getAllMessages: () => void,
    messages: {
        messages: {
            _id: string,
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
                <MessageCard message={message} key={message['_id']} id={message['_id']}/>
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