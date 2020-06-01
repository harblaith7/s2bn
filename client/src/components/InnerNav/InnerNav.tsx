import React, { Component } from 'react'
import "./InnerNav.scss"

export default class InnerNav extends Component {
    render() {
        return (
            <div className="InnerNav">
                <div className="InnerNav__container">
                    <ul className="InnerNav__list">
                        <li className="InnerNav__list-item">
                            <a href="" className="InnerNav__link InnerNav__link--active">Our Story</a>
                        </li>
                        <li className="InnerNav__list-item">
                            <a href="" className="InnerNav__link">What We Do</a>
                        </li>
                        <li className="InnerNav__list-item">
                            <a href="" className="InnerNav__link">Our Leadership Team</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
