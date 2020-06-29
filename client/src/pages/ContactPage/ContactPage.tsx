import React, { Component } from 'react';
import ContactHeader from "../../components/ContactHeader/ContactHeader"
import VolunteerOpportunities from "../../components/VolunteerOpportunities/VolunteerOpportunities";

class ContactPage extends Component {
    render() {
        return (
            <div className="ContactPage">
                <ContactHeader/>
                <VolunteerOpportunities/>
            </div>
        );
    }
}

export default ContactPage;