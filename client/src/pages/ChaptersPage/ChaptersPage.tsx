import React, { Component } from 'react';
import Nav from "../../components/Nav/Nav"
import SchoolImage from "../../components/SchoolImage/SchoolImage"
import Team from "../../components/Team/Team";
import ContactPage from "../../components/ContactChapter/ContactChapter";
import Sponsors from "../../components/Sponsors/Sponsors";
import "./ChaptersPage.scss"

export default class ChaptersPage extends Component {
    render() {
        return (
            <div className="ChapterPage">
                <Nav/>
                <SchoolImage/>
                <Team/>
                <ContactPage/>
                <Sponsors/>
            </div>
        )
    }
}
