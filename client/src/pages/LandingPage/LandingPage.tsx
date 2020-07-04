import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import About from "../../components/About/About"
import Events from "../../components/Events/Events"
import Chapters from "../../components/Chapters/Chapters"
import VideoSection from "../../components/VideoSection/VideoSection"
import Footer from "../../components/Footer/Footer"
import "./LandingPage.scss";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

interface IProps {
    user: {
        firstName: string,
        lastName: string,
        email: string
    } | null
}

 class LandingPage extends Component<IProps> {



    render() {

        if(this.props.user){
            return <Redirect to="/dashboard"/>
        }

        return (
            <div className="LandingPage">
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

const mapStateToProps = (state: any) => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(LandingPage)
