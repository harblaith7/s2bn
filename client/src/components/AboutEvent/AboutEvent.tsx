import React, { Component } from 'react'
import './AboutEvent.scss'

export default class AboutEvent extends Component {
    render() {
        return (
            <div className="AboutEvent">
                <div className="AboutEvent__container">
                    <h4 className="AboutEvent__header">
                        About the Event
                    </h4>
                    <div className="AboutEvent__info-container">
                        <p className="AboutEvent__blurb">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum dolore veritatis, omnis architecto voluptatum suscipit placeat possimus unde, a assumenda vero? Placeat reprehenderit voluptatem debitis obcaecati adipisci fugit ea, recusandae eaque expedita. In consectetur consequuntur neque perferendis corporis adipisci quas quaerat ea tempora rerum ad reprehenderit mollitia eaque reiciendis, iste blanditiis amet atque est exercitationem dolor incidunt consequatur eius? Dolor, repudiandae deserunt cum tempore facilis ipsam harum! Voluptatibus, non!
                        </p>
                        <img className="AboutEvent__event-image" src="https://lh3.googleusercontent.com/proxy/aIM_BMIn34LmH6wvLIG0W62_GjpW26JcanubQ609kdJI9f3YOIUCs1bF6ukWg9dRBNrlRaK-SPooiF4lVwG1yx6teTNXjeF2Wkc8wqcNMAEQSmLxM3HIeAAv-GcQ4V64pbdjeoIGnQYXw0NN-nY1cgSdRFZlEyaRtEUmJVCT0RyR2g" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
