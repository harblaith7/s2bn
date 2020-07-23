import React, { Component } from 'react'
import "./Chapters.scss"
import ChapterCard from "../ChapterCard/ChapterCard"

interface IState {
    cities: {
        imageUrl: string,
        imageAlt: string,
        name: String,
        linkTo: String
    }[]
}

export default class Chapters extends Component<{}, IState> {

    constructor(props: {}){
        super(props)
        this.state = {
            cities: [
                {
                    imageAlt : "Image of Kingston Ontario",
                    imageUrl : "https://nationalpostcom.files.wordpress.com/2019/08/university.jpg?quality=80&strip=all&w=780",
                    name : "Kingston, ON",
                    linkTo: "Kingston"
                },
                {
                    imageAlt : "Image of Toronto, ON",
                    imageUrl : "https://ak.picdn.net/shutterstock/videos/28247680/thumb/1.jpg?ip=x480",
                    name : "Toronto, ON",
                    linkTo: "Toronto"
                },
                {
                    imageAlt : "Image of Ottawa, ON",
                    imageUrl : "https://specials-images.forbesimg.com/imageserve/1064713266/960x0.jpg?fit=scale",
                    name : "Ottawa, ON",
                    linkTo: "Ottawa"
                },
                {
                    imageAlt : "Image of Waterloo, ON",
                    imageUrl : "https://www.explorewaterlooregion.com/wp-content/uploads/2018/08/Uptown-Waterloo-crowds-walking-and-cars-on-street-500x330.jpg",
                    name : "Waterloo, ON",
                    linkTo: "Waterloo"
                },
                {
                    imageAlt : "Image of Guelph, ON",
                    imageUrl : "https://guelph.ca/wp-content/uploads/aerial-of-Guelphjpg.jpg",
                    name : "Guelph, ON",
                    linkTo: "Guelph"
                },
                {
                    imageAlt : "Image of Edmonton, AB",
                    imageUrl : "https://assets.exploreedmonton.com/images/_300x170_crop_center-center_none/Edmonton-City-Skyline.jpg?utime=20190710140426",
                    name : "Edmonton, AB",
                    linkTo: "Edmonton"
                },
                {
                    imageAlt : "Image of London, ON",
                    imageUrl : "https://assets.exploreedmonton.com/images/_300x170_crop_center-center_none/Edmonton-City-Skyline.jpg?utime=20190710140426",
                    name : "London, ON",
                    linkTo: "London"
                }
            ]
        }
    }

    displayCards = () => {
        return this.state.cities.map(city => {
            return <ChapterCard city={city}/>
        })
    }

    render() {
        return (
            <div className="Chapters">
                <div className="Chapters__container">
                    <h2 className="Chapters__header" id="chapters">
                        Our Chapters
                    </h2>
                    <p className="Chapters__text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, deleniti culpa maiores hic sint sed recusandae, maxime aspernatur minima illum voluptatum? Doloribus natus eos sit possimus quidem eaque amet? Voluptatibus esse officiis ipsum tempora animi!
                    </p>
                    <div className="Chapters__card-container">
                        {this.displayCards()}
                    </div>
                </div>
            </div>
        )
    }
}
