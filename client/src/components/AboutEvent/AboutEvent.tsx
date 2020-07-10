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
                        <img className="AboutEvent__event-image" src="https://lh3.googleusercontent.com/proxy/aIM_BMIn34LmH6wvLIG0W62_GjpW26JcanubQ609kdJI9f3YOIUCs1bF6ukWg9dRBNrlRaK-SPooiF4lVwG1yx6teTNXjeF2Wkc8wqcNMAEQSmLxM3HIeAAv-GcQ4V64pbdjeoIGnQYXw0NN-nY1cgSdRFZlEyaRtEUmJVCT0RyR2g" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
