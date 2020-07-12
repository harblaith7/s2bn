import React, { Component } from 'react'
import "./EventDashboard.scss"
import CreateEvents from '../CreateEvents/CreateEvents'
import MonitorEvent from '../MonitorEvent/MonitorEvent'

interface IState {
    activeLink: "monitor" | "create"
}

export default class EventDashboard extends Component<{}, IState> {

    constructor(props: {}){
        super(props)
        this.state = {
            activeLink: "monitor"
        }
    }

    handleClick: (e: any) => void = (e) => {
        this.setState({
            activeLink: e.target.id as "monitor" | "create"
        })
    }

    render() {
        const {activeLink} = this.state
        return (
            <div className="EventDashboard">
                <nav className="EventDashboard__nav">
                    <li 
                        className={`EventDashboard__list-item ${activeLink === "monitor" && "EventDashboard__list-item--active"}`} 
                        id="monitor" 
                        onClick={this.handleClick}
                    >
                        Monitor
                    </li>
                    <li 
                        className={`EventDashboard__list-item ${activeLink === "create" && "EventDashboard__list-item--active"}`} 
                        id="create" 
                        onClick={this.handleClick}
                    >
                        Create
                    </li>
                </nav>
                <div className="EventDashboard__container">
                    {activeLink === "create" ? <CreateEvents isUpdate={false}/> : <MonitorEvent/>}
                </div>
            </div>
        )
    }
}
