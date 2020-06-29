import React, { Component } from 'react'
import EventHeader from '../../components/IndividualEventHeader/EventHeader'
import AboutEvent from '../../components/AboutEvent/AboutEvent'

class EventPage extends Component {
    render() {
        return (
            <div>
                <EventHeader/>
                <AboutEvent/>
            </div>
        )
    }
}

export default EventPage
