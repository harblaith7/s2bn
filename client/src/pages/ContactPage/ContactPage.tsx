import React, { Component } from 'react';
import Nav from "../../components/Nav/Nav"
import ContactHeader from "../../components/ContactHeader/ContactHeader"
import VolunteerOpportunities from "../../components/VolunteerOpportunities/VolunteerOpportunities";

class ContactPage extends Component {
    render() {
        return (
            <div className="ContactPage">
                <Nav/>
                <ContactHeader/>
                <VolunteerOpportunities/>
                
            </div>
        );
    }
}

export default ContactPage;