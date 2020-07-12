import React, { Component } from 'react'
import './MonitorEvent.scss'
import {connect} from 'react-redux'
import UpdateEventModal from '../Modals/UpdateEventModal/UpdateEventModal'

interface IState {
    currentEvent: {
        name: String,
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
        price: String,
        volume: String,
        firstName: String,
        attendes: any[],
        _id: String
    }
}

interface IProps {
    events: {
        name: String,
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
        price: String,
        volume: String,
        firstName: String,
        attendes: any[],
        _id: string
    }[]
}

class MonitorEvent extends Component<IProps, IState> {

    constructor(props: IProps){
        super(props)
        this.state={
            currentEvent: {
                name: "",
                location: "",
                cardImageUrl: "",
                startDate: {
                    day: "",
                    time: ""
                },
                endDate: {
                    day: "",
                    time: ""
                },
                shortDescription: "",
                longDescription: "",
                price: "",
                volume: "",
                firstName: "",
                attendes: [],
                _id: ""
            }
        }
    }

    displayEventCards: () => JSX.Element[] = () => {
       return this.props.events.map(event => {
            return (
                <div 
                    className="MonitorEvent__card" 
                    key={event._id} 
                    id={event._id}
                    onClick={this.handleClick}
                >
                    <h4 className="MonitorEvent__title" id={event._id}>
                        {event.name}
                    </h4>
                </div>
            )
       })
    }

    handleClick: (e: any) => void = (e) => {
        let filteredEvent = this.props.events.find(event => {
            console.log(event, e.target.id)
            return event._id === e.target.id
        })

        console.log(filteredEvent)

        if(filteredEvent){
            this.setState({
                currentEvent: {
                    ...filteredEvent
                }
            })
        }
    }

    render() {
        const {name, firstName, startDate: {day, time}, endDate, volume, attendes, price, longDescription, location, shortDescription} = this.state.currentEvent
        return (
            <div className="MonitorEvent">
                <div className="MonitorEvent__container">
                    <div className="MonitorEvent__events-container">
                        {this.displayEventCards()}
                    </div>
                    <div className="MonitorEvent__event-detail-container">
                        <div className="MonitorEvent__event-info-card">
                            {name && (
                                <div>
                                    <h2 className="MonitorEvent__header">
                                        {name}
                                    </h2>
                                    <p className="MonitorEvent__date">
                                        {`${day} from ${time} to ${endDate.time}`}
                                    </p>
                                    <div className="MonitorEvent__attendes-container">
                                        <p className="MonitorEvent__attendes">
                                            {attendes.length} / {volume} attendes  
                                        </p>
                                        <button className="MonitorEvent__view-more-btn">
                                            View More
                                        </button>
                                    </div>
                                    <p className="MonitorEvent__fields">
                                        <span>Created by:</span> {firstName}
                                    </p>
                                    <p className="MonitorEvent__fields">
                                        <span>Price:</span> ${price} CAD
                                    </p>
                                    <p className="MonitorEvent__fields">
                                        <span>Location:</span> {location} 
                                    </p>
                                    <p className="MonitorEvent__fields">
                                        <span>Short Description</span>: {shortDescription}
                                    </p>
                                    <p className="MonitorEvent__fields">
                                        <span>Long Description</span>: {longDescription}
                                    </p>
                                    <div className="MonitorEvent__btn-container">
                                        <button className="MonitorEvent__btn MonitorEvent__btn--red">
                                            Mark as Complete
                                        </button>
                                        <UpdateEventModal
                                            id={this.state.currentEvent._id}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    events: state.events
})

export default connect(mapStateToProps)(MonitorEvent)


/*
import React, { Component } from 'react'
import './MonitorEvent.scss'
import {connect} from 'react-redux'
import events from '../../redux/reducers/events'

interface IState {
        currentEventId: String,
        currentEvent: {
            name: String,
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
        price: String,
        volume: String,
        firstName: String,
        attendes: any[],
        _id: String
    }
}

interface IProps {
    events: {
        name: String,
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
        price: String,
        volume: String,
        firstName: String,
        attendes: any[],
        _id: String
    }
}

class MonitorEvent extends Component<IProps, IState> {

    constructor(props: IProps){
        super(props)
        this.state = {
            currentEventId: "",
            currentEvent: {
                name: "",
                location: "",
                cardImageUrl: "",
                startDate: {
                    day: "",
                    time: ""
                },
                endDate: {
                    day: "",
                    time: ""
                },
                shortDescription: "",
                longDescription: "",
                price: "",
                volume: "",
                firstName: "",
                attendes: [],
                _id: ""
            }
    }
    */