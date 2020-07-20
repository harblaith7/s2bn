import React, { Component, SelectHTMLAttributes } from 'react'
import "./EventsDisplay.scss"
import EventCardTwo from '../EventCardTwo/EventCardTwo'
import {connect} from 'react-redux'

interface IState {
    filter: string,
    totalEvents: number
}

interface IProps {
    events: {
        name: String,
        _id: String,
        location: String,
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
        volume: Number,
        firstName: String,
        filterWords: String[]
    }[]
}

 class EventsDisplay extends Component<IProps, IState> {

    constructor(props: IProps){
        super(props)
        this.state = {
            filter: "allEvents",
            totalEvents: 0
        }
    }

    displayCards: () => JSX.Element[] = () => {
        const {events} = this.props
        const {filter} = this.state
        if(filter === "allEvents"){
            return events.map(event => <EventCardTwo cardInfo={event}/>)
        }

        let filterCards = events.filter(event => event.filterWords.indexOf(filter) !== -1)

        return filterCards.map(card => <EventCardTwo cardInfo={card}/>)
        
    }

    handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            filter: e.target.value
        })
    }

    displayTotalEvents: () => number = () => {
        const {filter} = this.state;
        const {events} = this.props
        if(filter === "allEvents") return events.length
        else {
            return events.filter(event => event.filterWords.indexOf(filter) !== -1).length
        }
    }

    render() {
        return (
            <div className="EventsDisplay">
                <div className="EventsDisplay__container">
                    <nav className="EventsDisplay__nav">
                        <div className="EventsDisplay__all-events-nav-container">
                            <h4 className="EventsDisplay__all-events-title">
                                All Events
                            </h4>
                            <p className="EventsDisplay__all-events-number">
                                {this.displayTotalEvents()}
                            </p>
                        </div>
                        <div className="EventsDisplay__filter-btns">
                            <select name="" id="" className="EventsDisplay__select" onChange={this.handleChange}>
                                <option value="allEvents" className="EventsDisplay__option">All Events</option>
                                <option value="Virtual" className="EventsDisplay__option">Virtual</option>
                                <option value="Guelph" className="EventsDisplay__option">Guelph</option>
                                <option value="Toronto" className="EventsDisplay__option">Toronto</option>
                                <option value="Ottawa" className="EventsDisplay__option">Ottawa</option>
                                <option value="Western" className="EventsDisplay__option">Western</option>
                                <option value="Kingston" className="EventsDisplay__option">Kingston</option>
                            </select>
                            <button className="EventsDisplay__show-all-btn">
                                View All
                            </button>
                        </div>
                    </nav>
                    <div className="EventsDisplay__cards-container">
                        {this.displayCards()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    events: state.events
})

export default connect(mapStateToProps)(EventsDisplay)
