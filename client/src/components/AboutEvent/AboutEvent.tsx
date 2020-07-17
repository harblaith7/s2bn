import React, { Component } from 'react'
import './AboutEvent.scss'

interface IProps {
    longDescription: String
}

export default class AboutEvent extends Component<IProps> {
    render() {
        const {longDescription} = this.props
        return (
            <div className="AboutEvent">
                <div className="AboutEvent__container">
                    <h4 className="AboutEvent__header">
                        About the Event
                    </h4>
                    <div className="AboutEvent__info-container">
                        <p className="AboutEvent__blurb">
                            {longDescription}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
