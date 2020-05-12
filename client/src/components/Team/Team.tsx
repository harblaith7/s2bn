import React, { Component } from 'react';
import PersonCard from "../PersonCard/PersonCard"
import "./Team.scss"

export default class Team extends Component {
    render() {
        return (
            <div className="Team">
                <div className="Team__container">
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
