import React, { Component } from 'react'
import Nav from '../../components/Nav/Nav'
import EventHeader from '../../components/IndividualEventHeader/EventHeader'
import AboutEvent from '../../components/AboutEvent/AboutEvent'

class EventPage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <EventHeader/>
                <AboutEvent/>
            </div>
        )
    }
}

export default EventPage
