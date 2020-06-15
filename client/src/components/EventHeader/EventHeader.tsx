import React, { Component } from 'react'
import "./EventHeader.scss"

export default class EventHeader extends Component {
    render() {
        return (
            <div className="EventHeader">
                <div className="EventHeader__container">
                    <h2 className="EventHeader__header">
                        Our Upcoming Events
                    </h2>
                    <p className="EventHeader__description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nobis in iste tenetur quod reprehenderit deserunt voluptatem qui aliquam. Optio deserunt ducimus reprehenderit adipisci animi! In aliquam hic exercitationem repellendus.
                    </p>
                </div>
            </div>
        )
    }
}
