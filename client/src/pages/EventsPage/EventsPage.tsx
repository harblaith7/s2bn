import React, { Component } from 'react';
import EventHeader from "../../components/EventHeader/EventHeader"
import EventsDisplay from "../../components/EventsDisplay/EventsDisplay"


class EventsPage extends Component {
    render() {
        return (
            <div className="EventPage">
                <EventHeader/>
                <EventsDisplay/>
            </div>
        );
    }
}


export default EventsPage;