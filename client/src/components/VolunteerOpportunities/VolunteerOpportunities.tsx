import React, { Component } from 'react';
import "./VolunteerOpportunities.scss";
import axios from 'axios';

interface IState {
    chapters: {
        chapterName: string,
        _id: string,
        opportunities: {
            title: string,
            description: string,
            googleFormLink: string
        }[]
    }[]
}

class VolunteerOpportunities extends Component<{}, IState> {

    constructor(props: {}){
        super(props)
        this.state = {
            chapters: []
        }
    }

    componentDidMount = async () => {
        let results = await axios.get('http://localhost:5000/api/postings')
        this.setState({
            chapters: results.data
        })
    }

    displayOpportunities: () => JSX.Element[] = () => {
        return this.state.chapters.map(chapter => {
            return (
                <div className="VolunteerOpportunities__opportunities-container">
                    <h4 className="VolunteerOpportunities__chapter-heading">{chapter.chapterName}</h4>
                    {chapter.opportunities.map(opportunity => {
                        return (
                            <div className="VolunteerOpportunities__opportunity-container">
                                <h5 className="VolunteerOpportunities__title">{opportunity.title} : </h5>
                                <h5 className="VolunteerOpportunities__title-description">{opportunity.description}</h5>
                                <a className="VolunteerOpportunities__apply-btn" href={opportunity.googleFormLink}>Apply Here</a>
                            </div>
                        )
                    })}
                </div>
            )
        })
    }

    render() {
        return (
            <div className="VolunteerOpportunities">
                <div className="VolunteerOpportunities__container">
                    <h2 className="VolunteerOpportunities__heading">
                        Want to Volunteer?
                    </h2>
                    <p className="VolunteerOpportunities__description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ad dolorum sint asperiores? Fuga voluptatibus dolore cum cumque odio ut beatae, eaque aspernatur distinctio sint esse, quidem, molestias optio suscipit.
                    </p>
                    <div className="VolunteerOpportunities__all-opp-container">
                        {this.state.chapters.length && this.displayOpportunities()}
                    </div>
                </div>
            </div>
        );
    }
}

export default VolunteerOpportunities;