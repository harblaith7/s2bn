import React, { Component } from 'react'
import {Link} from "react-router-dom"

interface IProps {
    city: {
        imageUrl: string,
        imageAlt: string,
        name: String,
        linkTo: String
    }
}

export default class ChapterCard extends Component<IProps> {
    render() {
        return (
            <Link to={`/chapter/${this.props.city.linkTo}`} className="Chapters__card">
                <img src={this.props.city.imageUrl} alt={this.props.city.imageAlt} className="Chapters__img"/>
                <h3 className="Chapters__title">
                     {this.props.city.name}
                 </h3>
            </Link>
        )
    }
}
