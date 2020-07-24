import React, { Component } from 'react'
import "./ChaptersDashboard.scss"
import {connect} from "react-redux"

interface IState {
    cities: String[],
    activeCity: String
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
            activeCity: "London"
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

        console.log(results)

        if(results){
            console.log(results.snippet)
            return results.snippet
        } else {
            return ""
        }
        
        
    }

    changeCity = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        this.setState({
            activeCity: e.target.id
        })
    }

    updateSnippet = async () => {

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
                                value={this.findCurrentChapter()}
                            ></textarea>
                            <input className="ChaptersDashboard__submit" type="submit" value="Update Chapter Snippet"/>
                        </form>
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