import React, { Component } from 'react';
import "./AboutPage.scss"
import Nav from "../../components/Nav/Nav"
import AboutHeader from "../../components/AboutHeader/AboutHeader"

class AboutPage extends Component {
    render() {
        return (
            <div className="AboutPage">
                <Nav/>
                <AboutHeader/>
            </div>
        );
    }
}

export default AboutPage;