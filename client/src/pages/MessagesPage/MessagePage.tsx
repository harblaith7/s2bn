import React, { Component } from 'react'
import MessageBoard from "../../components/MessageBoard/MessageBoard"
import Message from "../../components/Message/Message"
import "./MessagePage.scss"
import {connect} from 'react-redux'
import {getAllMessages} from '../../redux/actions/messages'

interface IProps {
    getAllMessages: () => void,
}


class MessagePage extends Component<IProps> {

    componentDidMount(){       
        this.props.getAllMessages()
    }

    render() {
        return (
            <div className="MessagePage">
                <MessageBoard/>
                <Message/>
            </div>
        )
    }
}

export default connect(null, {getAllMessages})(MessagePage)
