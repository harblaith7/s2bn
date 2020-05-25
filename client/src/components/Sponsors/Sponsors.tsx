import React, { Component } from 'react';
import "./Sponsors.scss"

export default class Sponsors extends Component {
    render() {
        return (
            <div className = "Sponsors">
                <div className="Sponsors__container">
                    
                    <h2 className="Sponsors__header">
                        Our Sponsors
                    </h2>
                    <p className="Sponsors__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quae quod eius magni! Fuga, maiores dolor. Animi iure voluptatum quas?
                    </p>
                    <div className="Sponsors__sponsors-container">
                        <div className="Sponsors__row">
                            <div className="Sponsors__card Sponsors__card--three">
                                <img className="Sponsors__img" src="https://baycitiesanimalhospital.files.wordpress.com/2012/12/ovc_curvilinear.png" alt=""/>
                            </div>
                            <div className="Sponsors__card Sponsors__card--three">
                                <img src="https://www.uoguelph.ca/mbiotech/sites/uguelph/files/images/partners/logo-innovation-guelph.png" alt="" className="Sponsors__img"/>
                            </div>
                            <div className="Sponsors__card Sponsors__card--three">
                                <img src="https://biology.ucdavis.edu/sites/g/files/dgvnsk2646/files/inline-images/CBS-stacked.png" alt="" className="Sponsors__img"/>
                            </div>
                        </div>
                        <div className="Sponsors__row">
                            <div className="Sponsors__card Sponsors__card--two">
                                <img src="https://www.human.cornell.edu/sites/default/files/DNS/centers/insight.png" alt="" className="Sponsors__img"/>
                            </div>
                            <div className="Sponsors__card Sponsors__card--two ">
                                <img src="https://clubrunner.blob.core.windows.net/00000000169/Images/RC-of-Guelph-South-Logo---transparent-background.png" alt="" className="Sponsors__img size-3"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
