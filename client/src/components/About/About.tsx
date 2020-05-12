import React, { Component } from 'react'
import "./About.scss";
import worldConnection from "../../assets/images/svg/world-connection.svg"
import events from "../../assets/images/svg/icons/events.svg"

export default class About extends Component {
    render() {
        return (
            <section className="About">
                <div className="About__container">
                    
                    <div className="About__section-container">
                        <div className="About__text-container">
                            <h2 className="About__header">
                                About us   
                            </h2>  
                            <p className="About__text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia facere atque itaque odit sunt voluptas at quasi repellat architecto explicabo aut minima impedit illum sapiente autem nisi vitae, tempore perspiciatis.
                            </p>
                            <button className="About__btn">
                                Learn More
                            </button>
                        </div>
                        <div className="About__img-container">
                            <img src={worldConnection} alt="image of the world where each country is connected by dots and lines" className="About__img"/>
                        </div>
                    </div>  
                </div>  
            </section>
        )
    }
}
