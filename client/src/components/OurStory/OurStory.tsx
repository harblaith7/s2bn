import React, { Component } from 'react'
import "./OurStory.scss"

export default class OurStory extends Component {
    render() {
        return (
            <div className="OurStory">
                <div className="OurStory__container">
                    <div className="OurStory__text-container">
                        <h3 className="OurStory__data-header">
                            2004
                        </h3>
                        <div className="OurStory__text-and-image-container">
                            <p className="OurStory__description">
                                The Canadian Institutes of Health Research (CIHR) introduced the Science to Business (S2B) Scholarship to enable PhDs in a health related field to pursue an MBA with the goal of accelerating the translation of Canadian research discoveries into useful products, processes and services. Leveraging their business training in a variety of ways, recipients of the Scholarship have pursued careers in management, regulatory affairs, consulting, finance, and public policy not to mention other commercialization endeavors such as technology transfer and entrepreneurship.
                            </p>
                            <img src="https://i1.wp.com/www.sbrc.ca/wp-content/uploads/2019/02/Albensi-Dixon-Czubryt-Fernyhough-3.jpg?resize=1080%2C675" alt="" className="OurStory__img"/>
                        </div>
                    </div>
                    <div className="OurStory__text-container">
                        <h3 className="OurStory__data-header OurStory__data-header--right">
                            2012
                        </h3>
                        <div className="OurStory__text-and-image-container">
                            <img src="https://static.wixstatic.com/media/ddee1f_7c4723f5272649dfbaad8cb94ff4a501~mv2.jpg" alt="" className="OurStory__img"/>
                            
                            <p className="OurStory__description">
                                A core group of recipients of the CIHR S2B Scholarship formed the S2BN whose community now includes over 150 business-minded scientists who are working in leadership roles in various industries across Canada. As explained by Dr. Bruce Seet, founder of the S2BN, the group was formed with the vision “to develop Canada into a world-class center for innovation and technology commercialization”. Given the group’s composition of individuals who have been on both sides of academia and industry, a large focus of their efforts has been on “helping harness the talents of young Canadian scientists who are at the front-lines of discovery research and who have the potential to significantly contribute to Canada’s innovation environment”. 
                            </p>
                        </div>
                    </div>
                    <div className="OurStory__text-container">
                        <h3 className="OurStory__data-header">
                            Present
                        </h3>
                        <div className="OurStory__text-and-image-container">
                            
                            
                            <p className="OurStory__description">
                                While the network originally consisted of PhD/MBA alumni of the S2B Scholarship, the network now includes among its community other business-minded scientists who work in a variety of industries. The S2BN organizes and participates in events aimed at helping graduate-level trainees in career-related development and transitions, organizes networking events to connect like-minded professionals, academia and industry and is a partner for outreach educational programs that promote innovative thinking.
                            </p>
                            <img src="https://www.officescapemarkham.com/wp-content/uploads/2019/02/well-met-tools-for-arranging-a-corporate-business-meeting-or-conference-f.jpg" alt="" className="OurStory__img"/>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
