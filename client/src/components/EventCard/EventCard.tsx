import React, { Component } from 'react'
import "./EventCard.scss"

export default class EventCard extends Component {
    render() {
        return (
            <div className = "EventCard">
                <div className="EventCard__container">
                    <div className="EventCard__img-container">
                        <img src="https://manycam.com/blog/wp-content/uploads/2018/05/blogpost-webconferencingtips.jpg" alt="" className="EventCard__img"/>
                        <div className="EventCard__date-container">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
