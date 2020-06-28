import React, { Component } from 'react'
import './EventHeader.scss'

export default class EventHeader extends Component {
    render() {
        return (
            <div className="SingleEventHeader">
                <div className="SingleEventHeader__container">
                    <img src="https://pecb.com/conferences/wp-content/uploads/2019/04/announcing-the-pecb-insights-conference-2019.jpg" alt="" className="SingleEventHeader__img"/>
                    <div className="SingleEventHeader__white-overlay"></div>
                    <div className="SingleEventHeader__info-container">
                        <h4 className="SingleEventHeader__title">
                            Toronto Experience
                        </h4>
                        <h6 className="SingleEventHeader__date">
                            12-13 Feburary, 2019    
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
