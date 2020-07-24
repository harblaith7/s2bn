import React, { Component } from 'react'
import "./ChaptersDashboard.scss"

interface IState {
    cities: String[],
    activeCity: String
}

class ChaptersDashboard extends Component<{}, IState> {

    constructor(props: {}){
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
                            <textarea className="ChaptersDashboard__textarea"></textarea>
                            <input className="ChaptersDashboard__submit" type="submit" value="Update Chapter Snippet"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChaptersDashboard