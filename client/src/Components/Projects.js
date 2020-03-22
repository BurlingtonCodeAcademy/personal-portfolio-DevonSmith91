import React from 'react'
import Header from './Header.js'

class Projects extends React.Component {

    componentDidMount() {
        this.props.headerHandler()
    }
    
    render() {
        return (
            <div id='formatWrapper'>
                <div id='headerContainer'>
                    <Header headerText={this.props.headerText} />
                </div>
                <div id='formatContainer'>
                    This should be of my work!
            </div>
            </div>
        )
    }
}

export default Projects