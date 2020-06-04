import React, { Component, ReactNode } from 'react';
import "./WhatWeDo.scss";

interface IState {
    cardsInfo : {
        title: string,
        icon: string,
        description: string
    }[];
    cardArrowInfo : {
        description: string
    }[]
}

export default class WhatWeDo extends Component<{}, IState> {

    constructor(props : {}){
        super(props)
        this.state = {
            cardsInfo : [
                {
                    title: "Innovate",
                    icon: "asdas",
                    description: "By enhancing commercialization infrastructure and training we can improve innovation in the Health Sciences sector."
                },
                {
                    title: "Collaborate",
                    icon: "asdas",
                    description: "Collaborate with  Universities and other research intensive organizations to improve linkages between academia and industry."
                },
                {
                    title: "Network",
                    icon: "asdas",
                    description: "We provide networking opportunities to forge connections between professionals so together we can build a stronger Health Sciences sector."
                },
                {
                    title: "Improve",
                    icon: "asdas",
                    description: "Enhance management training in graduate programs by organizing career development events."
                },
            ],
            cardArrowInfo : [
                {
                    description: "Leverage academic networks to raise awareness around careers with HQP"
                },
                {
                    description: "Regular stylized events to further engage students that are ideally attended by industry partners to facilitate networking opportunities"
                },
                {
                    description: "HQP better integrated into economy and equipped to pursue/build opportunities post-PhD/PDF"
                },
                {
                    description: "Canada retains HQP and grows talent evenly throughout the country by leveraging regional strengths and assets"
                },
            ]
        }
    }

    displayCards = (): ReactNode => {
        return this.state.cardsInfo.map(info => {
            return (
                <div className="WhatWeDo__card-container">
                    <div className="WhatWeDo__card">
                        <div className="WhatWeDo__front">
                            <h3 className="WhatWeDo__card-title">
                                {info.title}
                            </h3>
                        </div>
                        <div className="WhatWeDo__back">
                            {info.description}
                        </div>
                    </div>
                </div>
            )
        })
    }

    displayArrowCards = (): ReactNode => {
        return this.state.cardArrowInfo.map(info => {
            return (
                <div className="WhatWeDo__arrow-card">
                    {info.description}
                </div>
            )
        })
    }

    render() {
        return (
            <div className="WhatWeDo">
                <div className="WhatWeDo__container">
                    <h3 className="WhatWeDo__data-header">
                        Our Mission
                    </h3>
                    <p className="WhatWeDo__description">
                        Foster a culture of innovation within and around the research and health care communities and optimize the Canadian environment for commercialization of science and innovation.
                    </p>
                    <div className="WhatWeDo__cards-container">
                        {this.displayCards()}
                    </div>
                   <div className="WhatWeDo__text-container">
                        <p className="WhatWeDo__description">
                            The S2BN believes that improving academia’s contribution to innovation in Canada depends on enhancing infrastructure in and around the research community to encourage innovative thinking and entrepreneurism, on improving linkages between academic researchers and industry, and on enhancing professional skills training for young scientists as well as other graduate-level trainees.
                            <br/> <br/>
                            Innovation needs to be embedded as a complementary component of Canada’s research culture and training environment.
                        </p>
                        <h4 className="WhatWeDo__sub-header">
                            S2BN draws attention to the value of highly qualified personnel (HQP) in Canada’s Innovation Economy
                        </h4>
                        <div className="WhatWeDo__arrow-cards-container">
                            {this.displayArrowCards()}
                        </div>
                        <div className="WhatWeDo__text-container">
                            <p className="WhatWeDo__description">
                                To assist in enhancing this aspect of Canada’s innovation ecosystem, the S2BN partners with stakeholders in academia and industry to create greater linkages and to provide leadership and mentorship to graduate trainees and scientists who are interested in commercialization, entrepreneurship and enhancing career path opportunities outside of academia. 
                                <br/>
                                <br/>
                                The S2BN organizes and frequently participates in events aimed at helping graduate-level trainees in career-related development and transitions, organizes networking events to connect like-minded professionals, academia and industry and is a partner for outreach educational programs that promote innovation among teens and young scientists.
                            </p>
                        </div>
                   </div>

                </div>
            </div>
        )
    }
}
