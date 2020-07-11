import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setCurrentMessageId} from '../../redux/actions/messages'

interface IProps {
    message : {
        _id: string;
        name: string;
        email: string;
        title: string;
        message: string;
        date: string;
        status: string
    }
    id: string
    setCurrentMessageId: (id: string) => void
    randomNumber: number
}

class MessageCard extends Component<IProps> {

    private cardRef = React.createRef<HTMLDivElement>();

    constructor(props: IProps){
        super(props)
    }

    handleClick: () => void = () => {
        this.props.setCurrentMessageId(this.props.id)
    }

    displayStatus: () => string = () => {
        const {status} = this.props.message
        if(status === "unread"){
            return "MessageBoard__message-status"
        } else if (status === "read") {
            return "MessageBoard__message-status--yellow"
        } else {
            return "MessageBoard__message-status--green"
        }
    }

    render() {
        const {message} = this.props
        return (
            <div className="MessageBoard__message-container" ref={this.cardRef} onClick={this.handleClick}>
                    <div className={`MessageBoard__message-status ${this.displayStatus()}`}></div>
                    <div className="MessageBoard__info-container">
                        <div className="MessageBoard__name-date-container">
                            <p className="MessageBoard__message-name">
                                {message.name}
                            </p>
                            <p className="MessageBoard__message-date">
                                {message.date.split('T')[0]}
                            </p>
                        </div>
                        <h4 className="MessageBoard__message-title">
                            {message.title}
                        </h4>
                    </div>
                </div>
        )
    }
}

export default connect(null, {setCurrentMessageId})(MessageCard)
