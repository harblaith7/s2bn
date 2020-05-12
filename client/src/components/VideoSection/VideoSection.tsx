import React, { Component } from 'react';
import "./VideoSection.scss"

export default class VideoSection extends Component {
    render() {
        return (
            <div className = "VideoSection">
                <div className="VideoSection__container">
                    <h2 className="VideoSection__header">
                        S2BN on the Go
                    </h2>
                    <p className="VideoSection__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur sed veritatis quibusdam nemo blanditiis iusto ipsum laborum perferendis ratione?
                    </p>
                    <div className="VideoSection__video-container">
                        <video controls className="VideoSection__video">
                            <source src="movie.mp4" type="video/mp4"/>
                            <source src="movie.ogg" type="video/ogg"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        )
    }
}
