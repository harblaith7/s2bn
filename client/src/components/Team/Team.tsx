import React, { Component } from 'react';
import PersonCard from "../PersonCard/PersonCard"
import "./Team.scss"
import { Link } from "react-router-dom"

interface IState {
    cities: String[]
}

export default class Team extends Component<{}, IState> {

    constructor(props: {}){
        super(props)
        this.state = {
            cities : ["London", "Kingston", "Guelph", "Ottawa", "Toronto", "Edmonton", "Waterloo"]
        }
    }

    displayNavTabs = () => {
        return this.state.cities.map(city => {
            return (
                <Link to={`/chapters/${city}`} className="Team__nav-tab">
                    {city}
                </Link>
            )
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
                        Our Guelph Team
                    </h2>
                    <p className="Team__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio deserunt dolorem iste similique facilis quis at, nostrum, aspernatur, dolor accusamus cum doloribus labore recusandae itaque totam!
                    </p>
                    <div className="Team__person-cards-container">
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                    </div>
                </div>
            </div>
        )
    }
}
