import React, { Component } from 'react';
import SchoolImage from "../../components/SchoolImage/SchoolImage"
import Team from "../../components/Team/Team";
import ContactPage from "../../components/ContactChapter/ContactChapter";
import Sponsors from "../../components/Sponsors/Sponsors";
import Footer from "../../components/Footer/Footer"
import "./ChaptersPage.scss"
import {connect} from 'react-redux'
import { fetchChapters } from '../../redux/actions/chapters';

interface IProps {
    fetchChapters: () => void
    chapters: {
        _id: String,
        city: String,
        snippet: String
    }[]
}


class ChaptersPage extends Component<IProps> {

    componentDidMount(){
        this.props.fetchChapters()
    }

    render() {
        return (
            <div className="ChapterPage" id="ChapterPage">
                <SchoolImage/>
                <Team
                    chapters={this.props.chapters}
                />
                <ContactPage/>
                <Sponsors/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    chapters: state.chapters
})

export default connect(mapStateToProps, {fetchChapters})(ChaptersPage)