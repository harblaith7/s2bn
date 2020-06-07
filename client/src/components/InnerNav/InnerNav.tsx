import React, { Component, ReactComponentElement, ChangeEvent } from 'react'
import "./InnerNav.scss"

interface IProps {
    updateSection : (page : "OurStory" | "WhatWeDo" | "OurTeam") => void
}

interface IState {
    activeLink : "OurStory" | "WhatWeDo" | "OurTeam"
}

export default class InnerNav extends Component<IProps, IState> {


    constructor(props: IProps){
        super(props)
        this.state = {
            activeLink: "OurStory"
        }
    }

    handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if(e.currentTarget.id === "OurStory" || e.currentTarget.id === "WhatWeDo" || e.currentTarget.id === "OurTeam"){
            this.props.updateSection(e.currentTarget.id)
            this.setState({
                activeLink : e.currentTarget.id
            })
        }
            
    }

    render() {

        const {activeLink} = this.state

        return (
            <div className="InnerNav">
                <div className="InnerNav__container">
                    <ul className="InnerNav__list">
                        <li className="InnerNav__list-item">
                            <span onClick={this.handleClick} className={`InnerNav__link ${activeLink === "OurStory" && "InnerNav__link--active"}`} id="OurStory">Our Story</span>
                        </li>
                        <li className="InnerNav__list-item">
                            <span onClick={this.handleClick} className={`InnerNav__link ${activeLink === "WhatWeDo" && "InnerNav__link--active"}`} id="WhatWeDo">What We Do</span>
                        </li>
                        <li className="InnerNav__list-item">
                            <span onClick={this.handleClick} className={`InnerNav__link ${activeLink === "OurTeam" && "InnerNav__link--active"}`} id="OurTeam">Our Leadership Team</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
