import React, { Component } from 'react'
import "./Events.scss"
import EventCard from "../EventCard/EventCard"
import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Events extends Component {
    render() {
        return (
            <div className = "Events">
                <div className="Events__container">
                    <div className="Events__slide-nav-background"></div>
                    <h2 className="Events__header">
                        Upcoming Events
                    </h2>
                    <Carousel>
                        <Carousel.Item>
                            <EventCard/>
                        </Carousel.Item>

                        <Carousel.Item>
                            <EventCard/>
                        </Carousel.Item>

                        <Carousel.Item>
                            <EventCard/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}
