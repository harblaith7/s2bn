import React, { Component, SelectHTMLAttributes } from 'react'
import EventsCardTwo from "../EventCardTwo/EventCardTwo"
import "./EventsDisplay.scss"
import EventCardTwo from '../EventCardTwo/EventCardTwo'

interface IState {
    cards: {
        img: string,
        title: string,
        date: string,
        filterWords: string[]
    }[],
    filter: string,
    totalEvents: number
}

 class EventsDisplay extends Component<{}, IState> {

    constructor(props: {}){
        super(props)
        this.state = {
            cards : [
                {
                    img: "",
                    title: "Guelph",
                    date: "",
                    filterWords: ["Guelph", "Virtual"]
                },
                {
                    img: "",
                    title: "Ottawa",
                    date: "",
                    filterWords: ["Ottawa", "Virtual"]
                },
                {
                    img: "",
                    title: "Toronto",
                    date: "",
                    filterWords: ["Toronto", "Virtual"]
                },
                {
                    img: "",
                    title: "Guelph",
                    date: "",
                    filterWords: ["Guelph", "Virtual"]
                },
                {
                    img: "",
                    title: "Toronto",
                    date: "",
                    filterWords: ["Toronto", "Virtual"]
                },
                {
                    img: "",
                    title: "Kingston",
                    date: "",
                    filterWords: ["Kingston", "Virtual"]
                }
            ],
            filter: "allEvents",
            totalEvents: 0
        }
    }

    displayCards: () => JSX.Element[] = () => {
        const {filter, cards} = this.state
        if(filter === "allEvents"){
            return cards.map(card => <EventCardTwo eventTitle={card.title}/>)
        }

        let filterCards = cards.filter(card => card.filterWords.indexOf(filter) !== -1)

        return filterCards.map(card => <EventCardTwo eventTitle={card.title}/>)
        
    }

    handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            filter: e.target.value
        })
    }

    displayTotalEvents: () => number = () => {
        const {filter, cards} = this.state;
        if(filter === "allEvents") return cards.length
        else {
            return cards.filter(card => card.filterWords.indexOf(filter) !== -1).length
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
                                <option value="Gueplh" className="EventsDisplay__option">Guelph</option>
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


export default EventsDisplay
