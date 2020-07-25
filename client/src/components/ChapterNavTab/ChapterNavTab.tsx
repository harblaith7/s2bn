import React, { Component } from 'react'
import {Link} from "react-router-dom"

interface IProps {
    city: String,
    changeActiveCity: (city: String) => void
}

export default class ChapterNavTab extends Component<IProps> {
    render() {
        return (
            <Link to={`/chapters/${this.props.city}`} className="Team__nav-tab"  onClick={() => {
                this.props.changeActiveCity(this.props.city)
            }}>
                {this.props.city}
            </Link>
        )
    }
}
