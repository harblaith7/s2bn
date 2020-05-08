import React, { Component } from 'react'
import "./Events.scss"
import EventCard from "../EventCard/EventCard"

export default class Events extends Component {
    render() {
        return (
            <div className = "Events">
                <div className="Events__container">
                    <h2 className="Events__header">
                        Upcoming Events
                    </h2>
                    <div className="Events__line"></div>
                    <div className="Events__event-card-container">
                        <EventCard />
                    </div>
                </div>
            </div>
        )
    }
}
