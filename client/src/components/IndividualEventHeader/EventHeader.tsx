import React, { Component } from 'react'
import './EventHeader.scss'
import RegisterModal from '../Modals/RegisterModal/RegisterModal'

interface IProps {
    imageUrl: String,
    title: String,
    startDate: {
        day: String,
        time: String
    },
    endDate: {
        day: String,
        time: String
    }
}

export default class EventHeader extends Component<IProps> {
    render() {
        const {imageUrl, title, startDate, endDate} = this.props
        return (
            <div className="SingleEventHeader">
                <div className="SingleEventHeader__container">
                    <img src={`${imageUrl}`} alt="" className="SingleEventHeader__img"/>
                    <div className="SingleEventHeader__white-overlay"></div>
                    <div className="SingleEventHeader__info-container">
                        <h4 className="SingleEventHeader__title">
                            {title}
                        </h4>
                        <h6 className="SingleEventHeader__date">
                            {startDate.day} at {startDate.time} to {endDate.time}
                        </h6>
                        <RegisterModal/>
                    </div>
                </div>
            </div>
        )
    }
}
