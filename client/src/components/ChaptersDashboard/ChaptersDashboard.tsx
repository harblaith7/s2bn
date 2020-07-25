import React, { Component } from 'react'
import "./ChaptersDashboard.scss"
import {connect} from "react-redux"
import axios from 'axios'
import ChapterAddMemberForm from "../ChapterAddMemberForm/ChapterAddMemberForm"

interface IState {
    cities: String[],
    activeCity: String,
    currentSnippet: String
}

interface IProps {
    chapters: {
        city: String,
        snippet: String,
        _id: String
    }[]
}

class ChaptersDashboard extends Component<IProps, IState> {

    constructor(props: IProps){
        super(props)
        this.state = {
            cities: ["London", "Waterloo", "Ottawa", "Toronto", "Edmonton", "Guelph", "Kingston"],
            activeCity: "London",
            currentSnippet :""
        }
    }

    displayTabs = () => {
        return this.state.cities.map(city => {
            return (
                <li 
                    className={`ChaptersDashboard__tab ${this.state.activeCity === city && "ChaptersDashboard__tab--active"}`}
                    onClick={this.changeCity}
                    id={`${city}`}
                >
                    {city}
                </li>
            )
        })
    }

    findCurrentChapter = () => {
        if(this.props.chapters.snippet === ""){
            return ""
        }

        let results = this.props.chapters.find(chapter => {
            return chapter.city === this.state.activeCity!
        })

        if(results){
            return results.snippet
        } else {
            return ""
        }

    }

    handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            currentSnippet: e.target.value
        })
    }

    changeCity = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        this.setState({
            activeCity: e.target.id
        })
    }

    updateSnippet = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await axios.post("http://localhost:5000/api/chapters", {
            city: this.state.activeCity,
            snippet: this.state.currentSnippet
        })
        await this.setState({
            currentSnippet: ""
        })
    }

    render() {
        return (
            <div className="ChaptersDashboard">
                <div className="ChaptersDashboard__container">
                    <h4 className="ChaptersDashboard__title">
                        Chapters
                    </h4>
                    <nav className="ChaptersDashboard__nav">
                        {this.displayTabs()}
                    </nav>
                    <div className="ChaptersDashboard__fields-container">
                        <form action="" className="ChaptersDashboard__form" onSubmit={this.updateSnippet}>
                            <p className="ChaptersDashboard__text">
                                Chapters Snippet
                            </p>
                            <textarea 
                                className="ChaptersDashboard__textarea"
                                placeholder={`${this.findCurrentChapter()}`}
                                value={`${this.state.currentSnippet}`}
                                onChange={this.handleChange}
                            ></textarea>
                            <input className="ChaptersDashboard__submit" type="submit" value="Update Chapter Snippet"/>
                        </form>
                        <div className="ChaptersDashboard__add-members-container">
                            <p className="ChaptersDashboard__text">
                                Add Member
                            </p>
                            <ChapterAddMemberForm
                                chapter={this.state.activeCity}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    chapters: state.chapters
})
export default connect(mapStateToProps)(ChaptersDashboard)