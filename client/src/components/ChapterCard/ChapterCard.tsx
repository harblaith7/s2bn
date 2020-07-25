import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';

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
            <Link to={`/chapters/${this.props.city.linkTo}/#ChapterPage`} className="Chapters__card">
                <img src={this.props.city.imageUrl} alt={this.props.city.imageAlt} className="Chapters__img"/>
                <h3 className="Chapters__title">
                     {this.props.city.name}
                 </h3>
            </Link>
        )
    }
}
