import React, { Component, ReactComponentElement, ChangeEvent } from 'react'
import "./InnerNav.scss"

interface IProps {
    updateSection : (page : "OurStory" | "WhatWeDo" | "OurTeam") => void
}

export default class InnerNav extends Component<IProps> {

    handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if(e.currentTarget.id === "OurStory" || e.currentTarget.id === "WhatWeDo" || e.currentTarget.id === "OurTeam")
            this.props.updateSection(e.currentTarget.id)
    }

    render() {
        return (
            <div className="InnerNav">
                <div className="InnerNav__container">
                    <ul className="InnerNav__list">
                        <li className="InnerNav__list-item">
                            <span onClick={this.handleClick} className="InnerNav__link InnerNav__link--active" id="OurStory">Our Story</span>
                        </li>
                        <li className="InnerNav__list-item">
                            <span onClick={this.handleClick} className="InnerNav__link" id="WhatWeDo">What We Do</span>
                        </li>
                        <li className="InnerNav__list-item">
                            <span onClick={this.handleClick} className="InnerNav__link" id="OurTeam">Our Leadership Team</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
