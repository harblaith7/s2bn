import React, { Component } from 'react'
import "./ContactDashboard.scss"
import axios from 'axios'

interface IState {
    title: String,
    description: String,
    googleFormLink: String,
    chapterName: String
}

export default class ContactDashboard extends Component<{}, IState> {

    constructor(props: {}){
        super(props)
        this.state = {
            title: "",
            description: "",
            googleFormLink: "",
            chapterName: "London"
        }
    }

    handleChange: (
        e: React.ChangeEvent<HTMLInputElement> |
        React.ChangeEvent<HTMLSelectElement>
        ) => void = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            })
    }

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/postings', {
            title: this.state.title,
            description: this.state.description,
            googleFormLink: this.state.googleFormLink,
            chapterName: this.state.chapterName
        })
    }

    render() {
        return (
            <div className="ContactDashboard">
                <div className="ContactDashboard__container">
                    <h4 className="ContactDashboard__title">
                        Volunteer Postings
                    </h4>
                    <form action="" className="ContactDashboard__form" onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            className="ContactDashboard__input"
                            placeholder="Title"
                            required
                            name="title"
                            onChange={this.handleChange}
                        />
                        <input 
                            type="text" 
                            className="ContactDashboard__input"
                            placeholder="Position Description"
                            required
                            name="description"
                            onChange={this.handleChange}
                        />
                        <input 
                            type="text" 
                            className="ContactDashboard__input"
                            placeholder="Google Form URL"
                            required
                            name="googleFormLink"
                            onChange={this.handleChange}
                        />
                        <select name="chapterName" id="" className="ContactDashboard__input" onChange={this.handleChange}>
                            <option value="London">London</option>
                            <option value="Toronto">Toronto</option>
                            <option value="Ottawa">Ottawa</option>
                            <option value="Guelph">Guelph</option>
                            <option value="Kingston">Kingston</option>
                            <option value="Waterloo">Waterloo</option>
                            <option value="Edmonton">Edmonton</option>
                        </select>
                        <input className="ContactDashboard__submit" type="submit" value="Create Posting"/>
                    </form>
                </div>
            </div>
        )
    }
}
