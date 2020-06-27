import React, { Component, SelectHTMLAttributes } from 'react'
import EventsCardTwo from "../EventCardTwo/EventCardTwo"
import "./EventsDisplay.scss"
import EventCardTwo from '../EventCardTwo/EventCardTwo'

interface IState {
    cards: {
        img: string,
        title: string,
        date: string,
        description: string,
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
                    img: "https://guelph.ca/wp-content/uploads/aerial-of-Guelphjpg.jpg",
                    title: "Virtual Business Network for Guelph",
                    description: "In this event we will be doing something really special as it will be virtual and stuff and other things too",
                    date: "2020-06-03",
                    filterWords: ["Guelph", "Virtual"]
                },
                {
                    img: "https://i.cbc.ca/1.5502282.1584571536!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/cda-coronavirus-20200318.jpg",
                    title: "Virtual Business Network for UOttawa",
                    description: "In this event we will be doing something really special as it will be virtual and stuff and other things too",
                    date: "2020-03-23",
                    filterWords: ["Ottawa", "Virtual"]
                },
                {
                    img: "https://media.tacdn.com/media/attractions-content--1x-1/0a/b0/c9/b4.jpg",
                    title: "Virtual Business Network for Toronto",
                    description: "In this event we will be doing something really special as it will be virtual and stuff and other things too",
                    date: "2020-06-03",
                    filterWords: ["Toronto", "Virtual"]
                },
                {
                    img: "https://www.theglobeandmail.com/resizer/rsuWtBTJYUc7Y_IlwOsMJVcN8D0=/2048x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/IFFGYMZKUNDYREDLYRORQD3A2U.JPG",
                    title: "Virtual Business Network for Guelph",
                    description: "In this event we will be doing something really special as it will be virtual and stuff and other things too",
                    date: "2020-06-03",
                    filterWords: ["Guelph", "Virtual"]
                },
                {
                    img: "https://cdn-0.newinhomes.com/90091d5a-1fe4-4168-82b0-70b94e59d3d2/l/toronto%20skyline%2020.jpeg",
                    title: "Virtual Business Network for Toronto",
                    description: "In this event we will be doing something really special as it will be virtual and stuff and other things too",
                    date: "2020-06-03",
                    filterWords: ["Toronto", "Virtual"]
                },
                {
                    img: "https://assets.tvo.org/prod/s3fs-public/styles/full_width_1280/public/article-thumbnails/Corrigan-Kingston-downtown.JPG?e0VZV.aEoKz0ni0VS4T7LXKaPvHC.ahO",
                    title: "Virtual Business Network for Kingston",
                    description: "In this event we will be doing something really special as it will be virtual and stuff and other things too",
                    date: "2020-06-03",
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
            return cards.map(card => <EventCardTwo cardInfo={card}/>)
        }

        let filterCards = cards.filter(card => card.filterWords.indexOf(filter) !== -1)

        return filterCards.map(card => <EventCardTwo cardInfo={card}/>)
        
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


export default EventsDisplay
