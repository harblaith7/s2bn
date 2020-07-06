import React, { Component, ChangeEvent } from 'react'
import "./OurTeam.scss";


interface IState {
    cardInfo : {
        education: string,
        name: string,
        title: string,
        img: string,
        alt: string
    }[],
    toDisplay : {
        education: string,
        name: string,
        title: string,
        img: string,
        alt: string
    }[]
}

export default class OurTeam extends Component<{}, IState> {

    constructor(props: {}){
        super(props)
        this.state = {
            cardInfo : [
                {
                    education: "PDH, MBA",
                    name: "Bruce Seet",
                    title: "Founder & President Board of Directors",
                    img: "https://static.wixstatic.com/media/ddee1f_461834fe79f94481858089ab29dd2f0e~mv2.jpg/v1/fill/w_200,h_200,al_c,q_80/btseet_edited.webp",
                    alt: "Image of Bruce Seet"
                },
                {
                    education: "PDH, MBA",
                    name: "Brian Knight",
                    title: "Board of Directors",
                    img: "https://static.wixstatic.com/media/ddee1f_8d74e0bb6890476380477e0550d7e927~mv2.jpg/v1/fill/w_200,h_200,al_c,lg_1,q_80/Brian%20Knight%20Image_edited_edited.webp",
                    alt: "Image of Brian Knight"
                },
                {
                    education: "PDH",
                    name: "Rylend Mulder",
                    title: "Executive Director Board of Directors",
                    img: "https://static.wixstatic.com/media/ddee1f_eb28532622ee4e489d5e97432ee4b909~mv2_d_1500_1498_s_2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01/image_edited.webp",
                    alt: "Image of Rylend Mulder"
                },
                {
                    education: "M BIOTECH",
                    name: "Christina Notte",
                    title: "Director, Strategic Operations",
                    img: "https://static.wixstatic.com/media/ddee1f_7b9360c7d3224c9c9b9c02c76139c6a5~mv2.jpg/v1/fill/w_200,h_200,al_c,q_80,usm_0.66_1.00_0.01/Christina%20Notte_edited.webp",
                    alt: "Image of Christina Notte"
                },
                {
                    education: "PDH",
                    name: "Mathew Platt",
                    title: "Director, Business Development",
                    img: "https://static.wixstatic.com/media/ddee1f_bb5731929bf8499c962c6499f62796a3~mv2.jpg/v1/fill/w_200,h_200,al_c,q_80/platt_edited.webp",
                    alt: "Image of Mathew Platt"
                },
                {
                    education: "MSc, PDH",
                    name: "Adrian Taylor",
                    title: "Director, Content Development ",
                    img: "https://static.wixstatic.com/media/ddee1f_f04e1bfacc0949f1830f09bdf4a27e35~mv2_d_2000_3000_s_2.jpg/v1/fill/w_200,h_200,al_c,q_80,usm_0.66_1.00_0.01/headshot%20(2)-1_edited.webp",
                    alt: "Image of Adrian Taylor "
                }
            ],
            toDisplay: [
                {
                    education: "PDH, MBA",
                    name: "Bruce Seet",
                    title: "Founder & President Board of Directors",
                    img: "https://static.wixstatic.com/media/ddee1f_461834fe79f94481858089ab29dd2f0e~mv2.jpg/v1/fill/w_200,h_200,al_c,q_80/btseet_edited.webp",
                    alt: "Image of Bruce Seet"
                },
                {
                    education: "PDH, MBA",
                    name: "Brian Knight",
                    title: "Board of Directors",
                    img: "https://static.wixstatic.com/media/ddee1f_8d74e0bb6890476380477e0550d7e927~mv2.jpg/v1/fill/w_200,h_200,al_c,lg_1,q_80/Brian%20Knight%20Image_edited_edited.webp",
                    alt: "Image of Brian Knight"
                },
                {
                    education: "PDH",
                    name: "Rylend Mulder",
                    title: "Executive Director Board of Directors",
                    img: "https://static.wixstatic.com/media/ddee1f_eb28532622ee4e489d5e97432ee4b909~mv2_d_1500_1498_s_2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01/image_edited.webp",
                    alt: "Image of Rylend Mulder"
                },
                {
                    education: "M BIOTECH",
                    name: "Christina Notte",
                    title: "Director, Strategic Operations",
                    img: "https://static.wixstatic.com/media/ddee1f_7b9360c7d3224c9c9b9c02c76139c6a5~mv2.jpg/v1/fill/w_200,h_200,al_c,q_80,usm_0.66_1.00_0.01/Christina%20Notte_edited.webp",
                    alt: "Image of Christina Notte"
                },
                {
                    education: "PDH",
                    name: "Mathew Platt",
                    title: "Director, Business Development",
                    img: "https://static.wixstatic.com/media/ddee1f_bb5731929bf8499c962c6499f62796a3~mv2.jpg/v1/fill/w_200,h_200,al_c,q_80/platt_edited.webp",
                    alt: "Image of Mathew Platt"
                },
                {
                    education: "MSc, PDH",
                    name: "Adrian Taylor",
                    title: "Director, Content Development ",
                    img: "https://static.wixstatic.com/media/ddee1f_f04e1bfacc0949f1830f09bdf4a27e35~mv2_d_2000_3000_s_2.jpg/v1/fill/w_200,h_200,al_c,q_80,usm_0.66_1.00_0.01/headshot%20(2)-1_edited.webp",
                    alt: "Image of Adrian Taylor "
                }
            ]
        }
    }

    displayCards: () => JSX.Element[] = () => {
        return this.state.toDisplay.map(info => {
            return (
                <div className="OurTeam__card" key={info.name}>
                    <img src={info.img} alt={info.alt} className="OurTeam__img"/>
                    <div className="OurTeam__description-container">
                        <h4 className="OurTeam__education">
                            {info.education}
                        </h4>
                        <h2 className="OurTeam__name">
                            {info.name}
                        </h2>
                        <p className="OurTeam__title">
                            {info.title}
                        </p>
                    </div>
                </div>
            )
        })
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        const newState = this.state.cardInfo.filter(info => {
            return info.name.toLowerCase().indexOf(e.target.value) !== -1
        })

        this.setState({
            toDisplay: newState
        })
    }

    

    render() {
        
        return (
            <div className="OurTeam">
                <div className="OurTeam__container">
                    <input 
                        type="text" 
                        className="OurTeam__input" 
                        onChange={this.handleChange}
                        placeholder="Search for a member"
                    />
                    <div className="OurTeam__card-container">
                        {this.displayCards()}
                    </div>
                </div>
            </div>
        )
    }
}
