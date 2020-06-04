import React, { Component } from 'react'
import "./AboutHeader.scss";
import InnerNav from "../InnerNav/InnerNav"
import OurStory from "../OurStory/OurStory"
import Footer from "../Footer/Footer";
import WhatWeDo from "../WhatWeDo/WhatWeDo"

interface IState {
    section: "OurStory" | "WhatWeDo" | "OurTeam"
}

class AboutHeader extends Component<{}, IState> {

    constructor(props: any){
        super(props)
        this.state = {
            section : "WhatWeDo"
        }
    }

    changePage = (page : "OurStory" | "WhatWeDo" | "OurTeam") => {
        this.setState({
            section : page 
        })
    }

    displayPage = () => {
        const {section} = this.state
        if(section === "OurStory") return <OurStory/>;
        else if(section === "WhatWeDo") return <WhatWeDo/>

    }

    render() {
        return (
            <div className="AboutHeader">
                <div className="AboutHeader__header"/>
                <div className="AboutHeader__container">
                    <InnerNav
                        
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
