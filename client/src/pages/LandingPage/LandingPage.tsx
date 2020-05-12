import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import Nav from "../../components/Nav/Nav"
import About from "../../components/About/About"
import Events from "../../components/Events/Events"
import Chapters from "../../components/Chapters/Chapters"
import VideoSection from "../../components/VideoSection/VideoSection"
import Footer from "../../components/Footer/Footer"
import "./LandingPage.scss"

 class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <Nav/>
                <Header/> 
                <About/>
                <Events/>
                <Chapters/>
                <VideoSection/>
                <Footer/>
            </div>
        )
    }
}

export default LandingPage
