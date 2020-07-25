import React, { Component } from 'react'
import axios from 'axios'

interface IState {
    name: String
    imageURL: String,
    linkedInURL: String,
    shortSnippet: String,
    position: String
}

interface IProps {
    chapter: String
}

export default class ChapterAddMemberForm extends Component<IProps, IState> {

    constructor(props: IProps){
        super(props)
        this.state = {
            name: "",
            imageURL: "",
            linkedInURL: "",
            shortSnippet: "",
            position: ""
        }
    }

    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        axios.post('http://localhost:5000/api/chapters/member', {
            name: this.state.name,
            imageURL: this.state.imageURL,
            linkedInURL: this.state.linkedInURL,
            shortSnippet: this.state.shortSnippet,
            position: this.state.position,
            chapter: this.props.chapter
        })

        await this.setState({
            name: "",
            imageURL:"",
            linkedInURL: "",
            shortSnippet: "",
            position: ""
        })

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        placeholder="First name" 
                        className="ChaptersDashboard__input"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name"
                    />
                    <input 
                        type="text" 
                        placeholder="AWS Image URL" 
                        className="ChaptersDashboard__input"
                        value={this.state.imageURL}
                        onChange={this.handleChange}
                        name="imageURL"
                    />
                 </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="LinkedIn URL" 
                        className="ChaptersDashboard__input"
                        value={this.state.linkedInURL}
                        onChange={this.handleChange}
                        name="linkedInURL"
                    />
                    <input 
                        type="text" 
                        placeholder="Position" 
                        className="ChaptersDashboard__input"
                        value={this.state.position}
                        onChange={this.handleChange}
                        name="position"
                    />
                </div>
                <input 
                    type="text" 
                    placeholder="Short Snippet (150 characters max)" 
                    className="ChaptersDashboard__input ChaptersDashboard__input--short"
                    value={this.state.shortSnippet}
                    onChange={this.handleChange}
                    name="shortSnippet"
                />
                <input className="ChaptersDashboard__submit ChaptersDashboard__submit--members" type="submit" value="Add Member"/>
            </form>
        )
    }
}
