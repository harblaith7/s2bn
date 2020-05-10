import React, { Component } from 'react'
import "./Footer.scss"
import facebook from "../../assets/images/svg/icons/facebook.svg"
import twitter from "../../assets/images/svg/icons/twitter.svg"
import instagram from "../../assets/images/svg/icons/instagram.svg"
import youtube from "../../assets/images/svg/icons/youtube.svg"

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Footer__container">
                    <div className="Footer__icons-container">
                        <a href="#" className="Footer__icon-container">
                            <img src={facebook} alt="facebook logo" className="Footer__icon"/>
                        </a>
                        <a href="#" className="Footer__icon-container">
                            <img src={twitter} alt="twitter logo" className="Footer__icon"/>
                        </a>
                        <a href="#" className="Footer__icon-container">
                            <img src={instagram} alt="instagram logo" className="Footer__icon"/>
                        </a>
                        <a href="#" className="Footer__icon-container">
                            <img src={youtube} alt="youtube logo" className="Footer__icon"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
