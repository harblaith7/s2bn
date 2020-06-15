import React, { Component } from 'react'
import "./EventCardTwo.scss"

interface IProps {
    eventTitle: string
}

class EventCardTwo extends Component<IProps> {
    render() {
        return (
            <div className="EventCardTwo">
                <div className="EventCardTwo__container">
                        {this.props.eventTitle}
                </div>
            </div>
        )
    }
}

export default EventCardTwo
