import React, { Component } from 'react'
import EventHeader from '../../components/IndividualEventHeader/EventHeader'
import AboutEvent from '../../components/AboutEvent/AboutEvent'
import {connect} from 'react-redux'


interface IProps {
    events: {
        name: String,
        location: String,
        _id: String,
        cardImageUrl: String,
        startDate: {
            day: String,
            time: String
        },
        endDate: {
            day: String,
            time: String
        },
        shortDescription: String,
        longDescription: String,
        price: Number,
        volume: Number
    }[]
}

class EventPage extends Component<IProps> {

    displayPage: () => JSX.Element = () => {
        let event = this.props.events.find(event => {
            return event._id === this.props.match.params.id
        })! 

        return (
            <>
                <EventHeader
                    imageUrl={event.cardImageUrl}
                    title={event.name}
                    startDate={event.startDate}
                    endDate={event.endDate}
                    price={event.price}
                />
                <AboutEvent
                    longDescription={event.longDescription}
                />
            </>
        )
    }

    render() {
        return (
            <div>
                {this.props.events.length ? this.displayPage() : ""}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    events: state.events
})

export default connect(mapStateToProps)(EventPage)
