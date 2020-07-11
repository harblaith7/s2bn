import React, { Component } from 'react'
import "./EventCardTwo.scss"
import { Link } from "react-router-dom"

interface IProps {
        cardInfo: {
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
            price: Number,
            volume: Number,
            firstName: String,
            filterWords: String[]
        }
}

class EventCardTwo extends Component<IProps> {
    render() {
        return (
            <div className="EventCardTwo">
                <div className="EventCardTwo__container">
                    <img src={`${this.props.cardInfo.cardImageUrl}`} alt="" className="EventCardTwo__img"/>
                    <h3 className="EventCardTwo__title">
                        {this.props.cardInfo.name}
                    </h3>
                    <h5 className="EventCardTwo__date">{this.props.cardInfo.startDate.day}</h5>
                    <p className="EventCardTwo__description">
                        {this.props.cardInfo.shortDescription}
                    </p>
                    <Link to="/events/eventId" className="EventCardTwo__learn-more-btn">Learn More</Link>
                </div>
            </div>
        )
    }
}

export default EventCardTwo
