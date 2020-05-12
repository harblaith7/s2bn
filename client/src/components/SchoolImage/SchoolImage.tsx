import React, { Component } from 'react';
import "./SchoolImage.scss"

export default class SchoolImage extends Component {
    render() {
        return (
            <div className="SchoolImage">
                <div className="SchoolImage__container">
                    <div className="SchoolImage__blur"></div>
                </div>
            </div>
        )
    }
}
