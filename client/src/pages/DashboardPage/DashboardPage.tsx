import React, { Component } from 'react'
import "./DashboardPage.scss"
import ChaptersDashboard from '../../components/ChaptersDashboard/ChaptersDashboard'
import {fetchChapters} from "../../redux/actions/chapters"
import {connect} from "react-redux"

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
            </div>
        )
    }
}

export default connect(null, {fetchChapters})(DashboardPage)
