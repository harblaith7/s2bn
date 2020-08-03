import React, { Component } from 'react';
import "./AboutPage.scss"
import AboutHeader from "../../components/AboutHeader/AboutHeader.jsx"

class AboutPage extends Component {
    render() {
        return (
            <div className="AboutPage">
                <AboutHeader/>
            </div>
        );
    }
}

export default AboutPage;