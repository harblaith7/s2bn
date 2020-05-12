import React, { Component } from 'react'
import "./Chapters.scss"

export default class Chapters extends Component {
    render() {
        return (
            <div className="Chapters">
                <div className="Chapters__container">
                    <h2 className="Chapters__header">
                        Our Chapters
                    </h2>
                    <p className="Chapters__text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, deleniti culpa maiores hic sint sed recusandae, maxime aspernatur minima illum voluptatum? Doloribus natus eos sit possimus quidem eaque amet? Voluptatibus esse officiis ipsum tempora animi!
                    </p>
                    <div className="Chapters__card-container">
                        <div className="Chapters__card">
                            <img src="https://nationalpostcom.files.wordpress.com/2019/08/university.jpg?quality=80&strip=all&w=780" alt="" className="Chapters__img"/>
                            <h3 className="Chapters__title">
                                Kingston, ON
                            </h3>
                        </div>
                        <div className="Chapters__card">
                            <img src="https://ak.picdn.net/shutterstock/videos/28247680/thumb/1.jpg?ip=x480" alt="" className="Chapters__img"/>
                            <h3 className="Chapters__title">
                                Toronto, ON
                            </h3>
                        </div>
                        <div className="Chapters__card">
                            <img src="https://specials-images.forbesimg.com/imageserve/1064713266/960x0.jpg?fit=scale" alt="" className="Chapters__img"/>
                            <h3 className="Chapters__title">
                                Ottawa, ON
                            </h3>
                        </div>
                        <div className="Chapters__card">
                            <img src="https://www.explorewaterlooregion.com/wp-content/uploads/2018/08/Uptown-Waterloo-crowds-walking-and-cars-on-street-500x330.jpg" alt="" className="Chapters__img"/>
                            <h3 className="Chapters__title">
                                Waterloo, ON
                            </h3>
                        </div>
                        <div className="Chapters__card">
                            <img src="https://guelph.ca/wp-content/uploads/aerial-of-Guelphjpg.jpg" alt="" className="Chapters__img"/>
                            <h3 className="Chapters__title">
                                Guelph, ON
                            </h3>
                        </div>
                        <div className="Chapters__card">
                            <img src="https://assets.exploreedmonton.com/images/_300x170_crop_center-center_none/Edmonton-City-Skyline.jpg?utime=20190710140426" alt="" className="Chapters__img"/>
                            <h3 className="Chapters__title">
                                Edmonton, AB
                            </h3>
                        </div>
                        <div className="Chapters__card">
                            <img src="https://assets.exploreedmonton.com/images/_300x170_crop_center-center_none/Edmonton-City-Skyline.jpg?utime=20190710140426" alt="" className="Chapters__img"/>
                            <h3 className="Chapters__title">
                                London, ON
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
