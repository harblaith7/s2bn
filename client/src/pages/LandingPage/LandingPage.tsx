import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import Nav from "../../components/Nav/Nav"
import "./LandingPage.scss"

 class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <Nav/>
               <Header/> 
            </div>
        )
    }
}

export default LandingPage
