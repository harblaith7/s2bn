import React, { Component } from 'react'
import "./EventDashboardPage.scss"
import EventDashboard from '../../components/EventDashboard/EventDashboard'

export default class EventDashboardPage extends Component {
    render() {
        return (
            <div className="EventDashboardPage">
                <div className="EventDashboardPage__container">
                    <div className="EventDashboardPage__text-container">
                        <h3 className="EventDashboardPage__header">
                            Events Dashboard
                        </h3>
                        <p className="EventDashboardPage__description">
                            Monitor and create events
                        </p>
                    </div>
                    <EventDashboard/>
                </div>
            </div>
        )
    }
}
