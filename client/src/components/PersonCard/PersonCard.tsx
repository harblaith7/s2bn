import React, { Component } from 'react'
import linkedIn from "../../assets/images/svg/icons/linkedin.svg";
import facebook from "../../assets/images/svg/icons/facebook.svg";
import twitter from "../../assets/images/svg/icons/twitter.svg"
import "./PersonCard.scss"

export default class PersonCard extends Component {
    render() {
        return (
            <div className="PersonCard">
                <div className="PersonCard__container">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGOxlVJBmgxGQ/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=bc1vhZ--ZHNy4rbsX3tTTgbJSRYGZRVyDIg3oEVCP-s" alt="" className="PersonCard__image"/>
                    <h5 className="PersonCard__name">
                        Barbora
                    </h5>
                    <h6 className="PersonCard__title">
                        Vice President, External
                    </h6>
                    <div className="PersonCard__social-container">
                        <img src={linkedIn} alt="linkedin icon" className="PersonCard__icon"/>
                        <img src={facebook} alt="facebook icon" className="PersonCard__icon"/>
                        <img src={twitter} alt="twitter icon" className="PersonCard__icon"/>
                    </div>
                    <p className="PersonCard__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus sint eius cumque nostrum mollitia vel enim sunt atque cupiditate?
                    </p>
                </div>
            </div>
        )
    }
}
