import React, { Component } from 'react'
import "./AboutHeader.scss";
import InnerNav from "../InnerNav/InnerNav"
import OurStory from "../OurStory/OurStory"
import Footer from "../Footer/Footer";
import WhatWeDo from "../WhatWeDo/WhatWeDo"
import OurTeam from "../OurTeam/OurTeam"

class AboutHeader extends Component {

    constructor(props){
        super(props)
        this.state = {
            section : "OurStory"
        }
    }

    changePage = (page) => {
        this.setState({
            section : page 
        })
    }

    displayPage = () => {
        const {section} = this.state
        if(section === "OurStory") return <OurStory/>;
        else if(section === "WhatWeDo") return <WhatWeDo/>
        else return <OurTeam/>
    }

    render() {
        return (
            <div className="AboutHeader">
                <div className="AboutHeader__header"/>
                <div className="AboutHeader__container">
                    <InnerNav
                        updateSection = {this.changePage}
                    />
                    <div className="AboutHeader__section-container">
                       {this.displayPage()}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default AboutHeader
