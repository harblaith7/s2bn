import React, { Component } from 'react';
import SchoolImage from "../../components/SchoolImage/SchoolImage"
import Team from "../../components/Team/Team";
import ContactPage from "../../components/ContactChapter/ContactChapter";
import Sponsors from "../../components/Sponsors/Sponsors";
import Footer from "../../components/Footer/Footer"
import "./ChaptersPage.scss"

export default class ChaptersPage extends Component {
    render() {
        return (
            <div className="ChapterPage" id="ChapterPage">
                <SchoolImage/>
                <Team/>
                <ContactPage/>
                <Sponsors/>
                <Footer/>
            </div>
        )
    }
}
