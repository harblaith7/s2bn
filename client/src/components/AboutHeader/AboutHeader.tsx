import React, { Component } from 'react'
import "./AboutHeader.scss";
import InnerNav from "../InnerNav/InnerNav"

export default class AboutHeader extends Component {
    render() {
        return (
            <div className="AboutHeader">
                <div className="AboutHeader__header"/>
                <div className="AboutHeader__container">
                    <InnerNav/>
                </div>
            </div>
        )
    }
}
