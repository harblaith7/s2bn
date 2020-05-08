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
                            <h2 className="EventCard__date-number">
                                13 
                            </h2>
                            <h3 className="EventCard__month">
                                May 2019
                            </h3>
                        </div>
                    </div>
                    <div className="EventCard__event-info-container">
                        <h3 className="EventCard__event-name">
                            The S2BN Virtual Career Café
                        </h3>
                        <p className="EventCard__date">
                            Wednesday, May 13th 2019
                            <br/>
                            11: 00 am - 2: 00pm
                        </p>
                        <p className="EventCard__event-description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint libero id inventore placeat eos! Repudiandae voluptatibus corporis dolorum iusto magni!
                        </p>
                        <button className="EventCard__register-btn">
                            Register now
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
