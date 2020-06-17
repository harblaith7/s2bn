import React, { Component } from 'react';
import Nav from "../../components/Nav/Nav"
import ContactHeader from "../../components/ContactHeader/ContactHeader"

class ContactPage extends Component {
    render() {
        return (
            <div className="ContactPage">
                <Nav/>
                <ContactHeader/>
            </div>
        );
    }
}

export default ContactPage;