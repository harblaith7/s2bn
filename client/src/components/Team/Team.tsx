import React, { Component } from 'react';
import PersonCard from "../PersonCard/PersonCard"
import "./Team.scss"
import { Link } from "react-router-dom"
import ChapterNavTab from "../ChapterNavTab/ChapterNavTab"
import chapters from '../../redux/reducers/chapters';

interface IState {
    cities: String[],
    activeCity: String
}

interface IProps {
    chapters: {
        _id: String,
        city: String,
        snippet: String,
        members: {
            name: String,
            imageURL: String,
            linkedInURL: String,
            shortSnippet: String,
            position: String
        }[]
    }[] 
}

export default class Team extends Component<IProps, IState> {

    constructor(props: IProps){
        super(props)
        this.state = {
            cities: ["London", "Kingston", "Guelph", "Ottawa", "Toronto", "Edmonton", "Waterloo"],
            activeCity: "London"
        }
    }

    componentDidUpdate(prevProps: any) {
        console.log(this.props)
    }

    displayNavTabs = () => {
        return this.state.cities.map((city, index) => {
            return (
                <ChapterNavTab
                    city={city}
                    changeActiveCity={this.changeActiveCity}
                    key={index}
                />
            )
        })
    }

    displayCards = () => {
        if(this.props.chapters.snippet !== ""){
            let chapter = this.props.chapters.find(chapter => {
                return chapter.city === this.state.activeCity;
            })

            if(chapter){
                if(chapter.members){
                    return chapter?.members.map(member => {
                        return <PersonCard member={member}/>
                    })
                } else {
                    return ""
                }
            } else {
                return ""
            }
            
        }
    }

    changeActiveCity = (city: String) => {
        this.setState({
            activeCity: city
        })
    }

    chaptersInfo = () => {
        console.log(this.props.chapters)
        if(this.props.chapters.members){
            return ""
        }
        return this.props.chapters.find(chapter => {
            return chapter.city === this.state.activeCity
        })
    }

    render() {
        return (
            <div className="Team">
                <div className="Team__container">
                    <nav className="Team__nav-container">
                        {this.displayNavTabs()}
                    </nav>
                    <h2 className="Team__header">
                        Our {this.state.activeCity} Team
                    </h2>
                    <p className="Team__text">
                        {this.chaptersInfo()?.snippet}
                    </p>
                    <div className="Team__person-cards-container">
                        {this.displayCards()}
                    </div>
                </div>
            </div>
        )
    }
}
