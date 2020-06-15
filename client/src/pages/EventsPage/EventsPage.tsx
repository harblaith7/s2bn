import React, { Component } from 'react';
import Nav from "../../components/Nav/Nav"
import EventHeader from "../../components/EventHeader/EventHeader"
import EventsDisplay from "../../components/EventsDisplay/EventsDisplay"

class EventsPage extends Component {
    render() {
        return (
            <div className="EventPage">
                <Nav/>
                <EventHeader/>
                <EventsDisplay/>
            </div>
        );
    }
}

export default EventsPage;