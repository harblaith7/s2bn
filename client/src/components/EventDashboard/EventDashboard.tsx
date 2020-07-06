import React, { Component } from 'react'
import "./EventDashboard.scss"

export default class EventDashboard extends Component {
    render() {
        return (
            <div className="EventDashboard">
                <nav className="EventDashboard__nav">
                    <li className="EventDashboard__list-item">
                        Monitor
                    </li>
                    <li className="EventDashboard__list-item">
                        Create
                    </li>
                </nav>
                <div className="EventDashboard__container">
                    dashboard
                </div>
            </div>
        )
    }
}
