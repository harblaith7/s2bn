import React, { Component } from 'react'
import './Message.scss'
import {connect} from 'react-redux'
import axios from 'axios'
import {updateMessageStatus, deleteMessage} from '../../redux/actions/messages'
import emailjs from 'emailjs-com'

type Messages = {
    _id: string,
    date: string,
    name: string,
    title: string,
    email: string,
    message: string,
    status: string
}[]

interface IProps {
    messages: Messages
    messageId: string
    updateMessageStatus: (id: string, messages: Messages, status: string) => void
    deleteMessage: (id: string, messages: Messages) => void
}

interface IState {
    message: {
        _id: string,
        date: string,
        name: string,
        title: string,
        email: string,
        message: string,
        status: string
    }
    writeBackMessage: string,
    title: string
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
                message: "",
                status: ""
            },
            writeBackMessage: "",
            title: ""
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

    displayParagraph = () => {
        return this.state.message.message.split("\n").map(line => {
            return (
                <>
                    <p className="Message__line">{line}</p>
                </>
            )
        })
    }

    handleClick: (e: any) => void = async (e) => {
        if(e.target.id === "resolved" || e.target.id === "read"){
            axios.patch('http://localhost:5000/api/messages/updateOne', {
                status: e.target.id,
                _id: this.state.message._id
            })
            this.props.updateMessageStatus(this.state.message._id, this.props.messages, e.target.id)
        }  else if (e.target.id === "delete") {
            this.props.deleteMessage(this.state.message._id, this.props.messages)
            axios.post('http://localhost:5000/api/messages/deleteUser', {
                _id: this.state.message._id
            })
        }
    }

    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {
        e.preventDefault()
        let template_params = {
            "userEmail": this.state.message.email,
            "title": this.state.title,
            "userName": this.state.message.name.split(" ")[0],
            "ourMessage": this.state.writeBackMessage
        }
        var service_id = "myserviceid";
        var template_id = "s2bn_responses";
        var user_id = "user_rAC4jzr3XMdBE8lJ6HsYK"
        emailjs.send(service_id, template_id, template_params, user_id);

        this.setState({
            writeBackMessage: "",
            title: ""
        })
    }

    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        if(e.target.id === 'title'){
            this.setState({
                title: e.target.value
            })
        } else {
            this.setState({
                writeBackMessage: e.target.value
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
                                {date.split('T')[0]}
                            </p>
                        </div>
                        <form action="" className="form-test"></form>
                        <div className="Message__status-btn-container">
                            {title && (
                                <>
                                  <button 
                                    className="Message__btn Message__btn--green" 
                                    id="resolved" 
                                    onClick={this.handleClick}
                                  >
                                        Mark as resolved
                                  </button>
                                  <button 
                                        className="Message__btn Message__btn--yellow" 
                                        id="read" 
                                        onClick={this.handleClick}
                                  >
                                        Mark as read
                                  </button>
                                  <button 
                                        className="Message__btn Message__btn--red"
                                        id="delete" 
                                        onClick={this.handleClick}
                                    >
                                        Delete message
                                    </button>
                                </>
                            )}
                        </div>
                    </nav>
                    <div className="Message__message-container">
                        <div className="Message__message-read-container">
                            <p className="Message__from-email">
                                {email && "From:"} {email}
                            </p>
                            <div className="Message__message">
                                {this.displayParagraph()}
                            </div>
                        </div>
                        {title && (
                            <div className="Message__message-write-container">
                                <form action="" className="Message__form" onSubmit={this.handleSubmit}>
                                    <input 
                                        type="text" 
                                        className="Message__input"
                                        onChange={this.handleChange}
                                        id="title"
                                        required
                                        placeholder="Title"
                                        value={this.state.title}
                                    />
                                    <textarea 
                                        className="Message__textarea" 
                                        value={this.state.writeBackMessage}
                                        onChange={this.handleChange}
                                        required
                                        placeholder="Your message back"
                                    />
                                    <input type="submit" className="Message__submit"/>
                                </form>
                            </div>
                        )}
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


export default connect(mapStateToProps, {updateMessageStatus, deleteMessage})(Message)