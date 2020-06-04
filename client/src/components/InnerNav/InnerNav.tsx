import React, { Component, ReactComponentElement, ChangeEvent } from 'react'
import "./InnerNav.scss"

interface IProps {
    updateSection : (page : "OurStory" | "WhatWeDo" | "OurTeam") => void
}

export default class InnerNav extends Component<IProps> {

    handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        
    }

    render() {
        return (
            <div className="InnerNav">
                <div className="InnerNav__container">
                    <ul className="InnerNav__list">
                        <li className="InnerNav__list-item">
                            <a href="#" onClick={this.handleClick} className="InnerNav__link InnerNav__link--active" id="OurStory">Our Story</a>
                        </li>
                        <li className="InnerNav__list-item">
                            <a href="#" onClick={this.handleClick} className="InnerNav__link" id="WhatWeDo">What We Do</a>
                        </li>
                        <li className="InnerNav__list-item">
                            <a href="#" onClick={this.handleClick} className="InnerNav__link" id="OurTeam">Our Leadership Team</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
