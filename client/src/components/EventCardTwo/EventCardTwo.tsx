import React, { Component } from 'react'
import "./EventCardTwo.scss"
import { Link } from "react-router-dom"

interface IProps {
        cardInfo: {
            title: string,
            img: string,
            date: string,
            description: string,
            filterWords: string[]
        }
}

class EventCardTwo extends Component<IProps> {
    render() {
        return (
            <div className="EventCardTwo">
                <div className="EventCardTwo__container">
                    <img src={this.props.cardInfo.img} alt="" className="EventCardTwo__img"/>
                    <h3 className="EventCardTwo__title">
                        {this.props.cardInfo.title}
                    </h3>
                    <h5 className="EventCardTwo__date">{this.props.cardInfo.date}</h5>
                    <p className="EventCardTwo__description">
                        {this.props.cardInfo.description}
                    </p>
                    <Link to="/events/eventId" className="EventCardTwo__learn-more-btn">Learn More</Link>
                </div>
            </div>
        )
    }
}

export default EventCardTwo
