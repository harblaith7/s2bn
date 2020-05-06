import React, { Component } from 'react'
import "./Nav.scss"
import s2bn from "../../assets/images/svg/s2bn.svg"

export default class Nav extends Component {
    render() {
        return (
            <nav className = "Nav">
               <ul className="Nav__list">
                   <li className="Nav__list-item">
                       <a href="" className="Nav__link">
                            <img src={s2bn} alt="" className="Nav__logo"/>
                       </a>
                   </li>
                   <li className="Nav__list-item Nav__list-item--right">
                       <a href="" className="Nav__link">
                            About
                       </a>
                   </li>
                   <li className="Nav__list-item">
                       <a href="" className="Nav__link">
                            Chapters
                       </a>
                   </li>
                   <li className="Nav__list-item">
                       <a href="" className="Nav__link">
                            Events
                       </a>
                   </li>
                   
                   <li className="Nav__list-item">
                       <a href="" className="Nav__link">
                            Sponsorship
                       </a>
                   </li>
                   <li className="Nav__list-item">
                       <a href="" className="Nav__link">
                            Contact
                       </a>
                   </li>
               </ul>
            </nav>
        )
    }
}
