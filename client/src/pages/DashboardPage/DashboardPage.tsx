import React, { Component } from 'react'
import "./DashboardPage.scss"
import ChaptersDashboard from '../../components/ChaptersDashboard/ChaptersDashboard'
import {fetchChapters} from "../../redux/actions/chapters"
import {connect} from "react-redux"
import ContactDashboard from '../../components/ContactDashboard/ContactDashboard'

interface IProps {
    fetchChapters: () => void
}

class DashboardPage extends Component<IProps> {

    componentDidMount = () => {
        this.props.fetchChapters()
    }

    render() {
        return (
            <div className="DashboardPage">
                <ChaptersDashboard/>
                <ContactDashboard/>
            </div>
        )
    }
}

export default connect(null, {fetchChapters})(DashboardPage)
