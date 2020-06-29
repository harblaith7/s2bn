import React, { Component } from 'react'
import "./ContactHeader.scss"
import {sendMessage} from '../../redux/actions/messages'
import {connect} from 'react-redux';
import Alert from '../Alert/Alert'

interface IState {
    name: string,
    message: string,
    email: string,
    title: string,
    alertStyle:string
}

interface IProps {
    sendMessage: (message: {
        name: string,
        email: string,
        title: string,
        message: string
    }) => Promise<boolean>,
    alert: string
}

 class ContactHeader extends Component<IProps, IState> {

    constructor(props: IProps){
        super(props)
        this.state = {
            name: "",
            message: "",
            email: "",
            title: "",
            alertStyle : ""
        }
    }

    handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void = (e) => {
        let field = e.target.name as keyof IState
        if(field === "name"){
            this.setState({
                [field] : e.target.value
            })
        } else if (field === "email"){
            this.setState({
                [field] : e.target.value
            })
        } else if (field === "title"){
            this.setState({
                [field] : e.target.value
            })
        } else if (field === "message"){
            this.setState({
                [field] : e.target.value
            })
        }
        
    }

    handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void = (e) => {
        const {name, email, message, title} = this.state
        e.preventDefault()
        this.props.sendMessage({
            name,
            email,
            message,
            title
        })
        .then(response => {
            if(response){
                this.setState({
                    name: "",
                    email: "",
                    message: "",
                    title: "",
                    alertStyle:"success"
                })
            } else {
                this.setState({
                    alertStyle: ""
                })
            }    
        })
    }

    render() {
        return (
            <div className="ContactHeader">
                <div className="ContactHeader__container">
                    <h2 className="ContactHeader__heading">
                        Have Some Questions?
                    </h2>
                    <div className="ContactHeader__form-container">
                         {this.props.alert && <Alert alertType={2} alertStyle={this.state.alertStyle}/>}
                        <form className="ContactHeader__form" onSubmit={this.handleSubmit}>
                            <input 
                                type="text" 
                                className="ContactHeader__input" 
                                placeholder="Name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                            <input 
                                type="text" 
                                className="ContactHeader__input" 
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <input 
                                type="text" 
                                className="ContactHeader__input" 
                                placeholder="Title"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                            <textarea 
                                className="ContactHeader__textarea" 
                                placeholder="Your message to us"
                                name="message"
                                value={this.state.message}
                                onChange={this.handleChange}
                            ></textarea>
                            <input type="submit" className="ContactHeader__input" value="Send Message"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    alert: state.alert
})

export default connect(mapStateToProps, {sendMessage})(ContactHeader)