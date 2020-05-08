import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import Nav from "../../components/Nav/Nav"
import About from "../../components/About/About"
import "./LandingPage.scss"

 class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <Nav/>
                <Header/> 
                <About/>
            </div>
        )
    }
}

export default LandingPage
