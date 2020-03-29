import React from 'react'
import { Route } from 'react-router'
import About from "./About.js"
import Home from "./Home.js"
import Work from "./Work.js"
import Hobbies from "./Hobbies.js"
import Contact from "./Contact.js"
import '../Styles/App.css'

class Info extends React.Component {
    // on mounting, adjust header title
    componentDidUpdate(){
        this.props.pageUpdate()
    }
    // render the page
    render() {
        return (
            // Router for what information gets displayed on the page depending on what link is clicked on
            <div id="infoWrapper">
                {/* Home page */}
                <Route exact path='/'>
                    <Home headerText={this.props.headerText} headerHandler={this.props.headerHandler} sidebar={this.props.sidebar} />
                </Route>
                {/* About Page */}
                <Route path='/about'>
                    <About headerText={this.props.headerText} headerHandler={this.props.headerHandler} />
                </Route>
                {/* Work Page */}
                <Route path='/work'>
                    <Work headerText={this.props.headerText} headerHandler={this.props.headerHandler} />
                </Route>
                {/* Hobbies Page */}
                <Route path='/hobbies'>
                    <Hobbies headerText={this.props.headerText} headerHandler={this.props.headerHandler} />
                </Route>
                {/* Contact page */}
                <Route path='/contact'>
                    <Contact headerText={this.props.headerText} headerHandler={this.props.headerHandler} />
                </Route>
            </div>
        )
    }
}

    export default Info