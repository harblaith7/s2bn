import React, { Component } from 'react'
import "./CreateEvents.scss"
import EventDisplayModal from "../EventDisplayModal/EventDisplayModal"


export default class CreateEvents extends Component<{}, any> {

    constructor(props: {}){
        super(props)
        this.state = {
            eventDetails: {
                name: "",
                location: "",
                cardImageUrl: "",
                startDate: {
                    day: "",
                    time: ""
                },
                endDate: {
                    day: "",
                    time: ""
                },
                shortDescription: "",
                longDescription: "",
                price: "",
                volume: ""
            },
            characterCounts: {
                name: {
                    current: 0,
                    max: 50
                },
                location: {
                    current: 0,
                    max: 25
                },
                shortDescription: {
                    current: 0,
                    max: 100
                },
                longDescription: {
                    current: 0,
                    max: 500
                }
            }
            
        }
    }

    handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void = async (e) => {
        const target = e.target

        // CHANGING THE STATE 
        if(['startDate-day', 'startDate-time', 'endDate-day', 'endDate-time'].indexOf(target.name) !== -1){
             const [timing, specific] = target.name.split('-')
             this.setState({
                 eventDetails: {
                     ...this.state.eventDetails,
                     [timing]: {
                         ...this.state.eventDetails[timing],
                         [specific]: target.value
                     }
                 }
             })
        } else {
            // CHECKING IF CHARACTER LIMIT IS HIT
            if(['name', 'location', 'shortDescription', 'longDescription'].indexOf(target.name) !== -1){
                console.log(target.value)
                if(target.value.length > this.state.characterCounts[target.name].max) {
                    return
                }
            }

            // CHANGING THE STATE
            await this.setState({
                eventDetails: {
                    ...this.state.eventDetails,
                    [target.name] : target.value
                }
            })

            // CHANGE CHARACTER COUNT
            await this.setState({
                characterCounts: {
                    ...this.state.characterCounts,
                    [target.name]: {
                        ...this.state.characterCounts[target.name],
                        current: this.state.eventDetails[target.name].length
                    }
                }
            })
            
            
            
        }
         
    }

    render() {
        const {name, location, cardImageUrl, startDate, endDate, shortDescription, longDescription, price, volume} = this.state.eventDetails
        const {characterCounts} = this.state
        return (
            <div className="CreateEvents">
                <div className="CreateEvents__container">
                    <form action="" className="CreateEvents__form">
                        <div className="CreateEvents__input-container">
                            <label htmlFor="" className="CreateEvents__label">
                                Event Name
                            </label>
                            <input 
                                type="text" 
                                className="CreateEvents__input" 
                                name="name"
                                onChange={this.handleChange}
                                value={name}
                            />
                            <p className="CreateEvents__character">
                                {characterCounts.name.current}/{characterCounts.name.max} characters
                            </p>
                            <label htmlFor="" className="CreateEvents__label">
                                Start Date
                            </label>
                            <input 
                                type="date" 
                                className="CreateEvents__input" 
                                name="startDate-day"
                                onChange={this.handleChange}
                                value={startDate.day}
                            />
                            <input 
                                type="time" 
                                className="CreateEvents__input" 
                                name="startDate-time"
                                onChange={this.handleChange}
                                value={startDate.time}
                            />
                            <label htmlFor="" className="CreateEvents__label">
                                End Date
                            </label>
                            <input 
                                type="date" 
                                className="CreateEvents__input" 
                                placeholder="Event Name"
                                name="endDate-day"
                                onChange={this.handleChange}
                                value={endDate.day}
                            />
                            <input 
                                type="time" 
                                className="CreateEvents__input" 
                                placeholder="Event Name"
                                name="endDate-time"
                                onChange={this.handleChange}
                                value={endDate.time}
                            />
                            <label htmlFor="" className="CreateEvents__label">
                                Image URL
                            </label>
                            <input 
                                type="text" 
                                className="CreateEvents__input" 
                                placeholder="Insert an image URL representing the event"
                                name="cardImageUrl"
                                onChange={this.handleChange}
                                value={cardImageUrl}
                            />
                            <label htmlFor="" className="CreateEvents__label">
                                Location
                            </label>
                            <input 
                                type="text" 
                                className="CreateEvents__input" 
                                name="location"
                                onChange={this.handleChange}
                                value={location}
                            />
                            <p className="CreateEvents__character">
                                {characterCounts.location.current}/{characterCounts.location.max} characters
                            </p>
                            <label htmlFor="" className="CreateEvents__label">
                                Short Description
                            </label>
                            <textarea 
                                className="CreateEvents__input"
                                placeholder="Write a short snippet describing the event"
                                name="shortDescription"
                                onChange={this.handleChange}
                                value={shortDescription}
                            >
                            </textarea>
                            <p className="CreateEvents__character">
                                {characterCounts.shortDescription.current}/{characterCounts.shortDescription.max} characters
                            </p>
                            <label htmlFor="" className="CreateEvents__label">
                                Long Description
                            </label>
                            <textarea 
                                className="CreateEvents__input CreateEvents__input--longer"
                                placeholder="Describe your event"
                                name="longDescription"
                                onChange={this.handleChange}
                                value={longDescription}
                            >
                            </textarea>
                            <p className="CreateEvents__character">
                                {characterCounts.longDescription.current}/{characterCounts.longDescription.max} characters
                            </p>
                            <label htmlFor="" className="CreateEvents__label">
                                Price (CAD)
                            </label>
                            <input 
                                type="number" 
                                className="CreateEvents__input" 
                                placeholder="Price of the event, insert 0 if free"
                                name="price"
                                onChange={this.handleChange}
                                value={price}
                            />
                            <label htmlFor="" className="CreateEvents__label">
                                Volume
                            </label>
                            <input 
                                type="number" 
                                className="CreateEvents__input" 
                                placeholder="Insert the max number of spots avaliable"
                                name="volume"
                                onChange={this.handleChange}
                                value={volume}
                            />
                            <input 
                                type="submit"
                                value="Create Event"
                                className="CreateEvents__input CreateEvents__input--submit" 
                            />
                        </div>
                    </form>
                    <div className="CreateEvents__demo-card-container">
                            <div className="CreateEvents__card">
                                <div className="CreateEvents__card-image-container">
                                    <img src={cardImageUrl} alt="" className="CreateEvents__card-image"/>
                                </div>
                                <div className="CreateEvents__card-description-container">
                                    <h3 className="CreateEvents__title">
                                        {name}
                                    </h3>
                                    <p className="CreateEvents__date">
                                        {startDate.day}
                                    </p>
                                    <p className="CreateEvents__short-description">
                                        {shortDescription}
                                    </p>
                                </div>
                                <EventDisplayModal
                                    imageUrl={cardImageUrl}
                                    title={name}
                                    date={startDate.day}
                                    longDescription={longDescription}
                                />
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
