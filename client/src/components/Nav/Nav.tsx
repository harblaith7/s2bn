import React, { Component } from 'react'
import "./Nav.scss"
import s2bn from "../../assets/images/svg/s2bn.svg"
import {Link} from "react-router-dom"

export default class Nav extends Component {
    render() {
        return (
            <nav className = "Nav">
               <ul className="Nav__list">
                   <li className="Nav__list-item">
                       <Link to="/" className="Nav__link">
                            <img src={s2bn} alt="" className="Nav__logo"/>
                       </Link>
                   </li>
                   <li className="Nav__list-item Nav__list-item--right">
                       <Link to="/about" className="Nav__link">
                            About
                       </Link>
                   </li>
                   <li className="Nav__list-item">
                       <Link to="/chapters" className="Nav__link">
                            Chapters
                       </Link>
                   </li>
                   <li className="Nav__list-item">
                       <Link to="/events" className="Nav__link">
                            Events
                       </Link>
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
