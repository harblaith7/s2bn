import React, { Component } from 'react'
import EventsCardTwo from "../EventCardTwo/EventCardTwo"
import "./EventsDisplay.scss"
import EventCardTwo from '../EventCardTwo/EventCardTwo'

interface IState {
    cards: {
        img: string,
        title: string,
        date: string,
        filterWords: string[]
    }[]
}

 class EventsDisplay extends Component<{}, IState> {

    constructor(props: {}){
        super(props)
        this.state = {
            cards : [
                {
                    img: "",
                    title: "",
                    date: "",
                    filterWords: [""]
                }
            ]
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
                                20
                            </p>
                        </div>
                        <div className="EventsDisplay__filter-btns">
                            <select name="" id="" className="EventsDisplay__select">
                                <option value="" className="EventsDisplay__option">All Events</option>
                                <option value="" className="EventsDisplay__option">Virtual</option>
                                <option value="" className="EventsDisplay__option">Guelph</option>
                                <option value="" className="EventsDisplay__option">Toronto</option>
                                <option value="" className="EventsDisplay__option">Ottawa</option>
                                <option value="" className="EventsDisplay__option">Western</option>
                                
                            </select>
                            <button className="EventsDisplay__show-all-btn">
                                View All
                            </button>
                        </div>
                    </nav>
                    <div className="EventsDisplay__cards-container">
                        <EventCardTwo eventTitle="wq"/>
                    </div>
                </div>
            </div>
        )
    }
}


export default EventsDisplay
