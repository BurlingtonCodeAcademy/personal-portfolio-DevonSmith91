import React from 'react'
import '../Styles/App.css'
import Header from './Header.js'

class About extends React.Component {

    componentDidMount() {
        this.props.headerHandler()
    }
    
    render() {
    return (
        <div id='formatWrapper'>
            <div id='headerContainer'>
                <Header headerText={this.props.headerText}/>
            </div>
            <div id='formatContainer'>
                <p> 
                PAGE FOR THE ABOUTS
                </p>
            </div>
        </div>
    )
}
}

export default About