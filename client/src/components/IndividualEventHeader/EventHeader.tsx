import React, { Component } from 'react'
import './EventHeader.scss'

interface IProps {
    imageUrl: String,
    title: String,
    date: String
}

export default class EventHeader extends Component<IProps> {
    render() {
        const {imageUrl, title, date} = this.props
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
                            {date} 
                        </h6>
                        <button className="SingleEventHeader__register-btn">
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
