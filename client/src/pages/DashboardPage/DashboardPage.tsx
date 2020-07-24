import React, { Component } from 'react'
import "./DashboardPage.scss"
import ChaptersDashboard from '../../components/ChaptersDashboard/ChaptersDashboard'

class DashboardPage extends Component {
    render() {
        return (
            <div className="DashboardPage">
                <ChaptersDashboard/>
            </div>
        )
    }
}

export default DashboardPage
