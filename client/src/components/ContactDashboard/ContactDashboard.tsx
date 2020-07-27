import React, { Component } from 'react'
import "./ContactDashboard.scss"

export default class ContactDashboard extends Component {
    render() {
        return (
            <div className="ContactDashboard">
                <div className="ContactDashboard__container">
                    <h4 className="ContactDashboard__title">
                        Volunteer Postings
                    </h4>
                    <form action="" className="ContactDashboard__form">
                        <input 
                            type="text" 
                            className="ContactDashboard__input"
                            placeholder="Title"
                            required
                        />
                        <input 
                            type="text" 
                            className="ContactDashboard__input"
                            placeholder="Position Description"
                            required
                        />
                        <input 
                            type="text" 
                            className="ContactDashboard__input"
                            placeholder="Google Form URL"
                            required
                        />
                        <select name="" id="" className="ContactDashboard__input">
                            <option value="London">London</option>
                            <option value="Toronto">Toronto</option>
                            <option value="Ottawa">Ottawa</option>
                            <option value="Guelph">Guelph</option>
                            <option value="Kingston">Kingston</option>
                            <option value="Waterloo">Waterloo</option>
                            <option value="Edmonton">Edmonton</option>
                        </select>
                        <input className="ContactDashboard__submit" type="submit" value="Create Posting"/>
                    </form>
                </div>
            </div>
        )
    }
}
