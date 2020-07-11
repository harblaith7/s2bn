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
            date: string,
            status: string
        }[]
    }
}

interface IState {
    randomNumber: number
}

class MessageBoard extends Component<IProps, IState> {

    constructor(props: IProps){
        super(props)
        this.state = {
            randomNumber: Math.floor(Math.random() * 10000)
        }
    }

    componentDidMount(){       
        this.props.getAllMessages()
    }

    displayMessages: () => JSX.Element[] = () => {
        return this.props.messages.messages.reverse().map(message => {
            return (
                <MessageCard 
                    message={message} 
                    key={message['_id']} 
                    id={message['_id']} 
                    randomNumber={Math.floor(Math.random() * 10000000)}
                />
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
                        {this.props.messages.messages.length && this.displayMessages()}
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