import React, { Component } from 'react'
import linkedIn from "../../assets/images/svg/icons/linkedin.svg";
import facebook from "../../assets/images/svg/icons/facebook.svg";
import twitter from "../../assets/images/svg/icons/twitter.svg"
import "./PersonCard.scss"

interface IProps {
    member: {
        name: String,
        imageURL: String,
        linkedInURL: String,
        shortSnippet: String,
        position: String
    }
}

export default class PersonCard extends Component<IProps> {
    render() {
        const {name, imageURL, linkedInURL, shortSnippet, position} = this.props.member
        return (
            <div className="PersonCard">
                <div className="PersonCard__container">
                    <img src={imageURL} alt="Picture of member" className="PersonCard__image"/>
                    <h5 className="PersonCard__name">
                        {name}
                    </h5>
                    <h6 className="PersonCard__title">
                        {position}
                    </h6>
                    <div className="PersonCard__social-container">
                        <img src={linkedIn} alt="linkedin icon" className="PersonCard__icon"/>
                        <img src={facebook} alt="facebook icon" className="PersonCard__icon"/>
                        <img src={twitter} alt="twitter icon" className="PersonCard__icon"/>
                    </div>
                    <p className="PersonCard__text">
                        {shortSnippet}
                    </p>
                </div>
            </div>
        )
    }
}
