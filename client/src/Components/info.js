import React from 'react'
import { Route } from 'react-router'
import About from "./About.js"
import Home from "./Home.js"
import Work from "./Work.js"
import Hobbies from "./Hobbies.js"
import Contact from "./Contact.js"
import '../Styles/App.css'

class Info extends React.Component {

    componentDidUpdate(){
        this.props.pageUpdate()
    }

    render() {
        return (
            <div id="infoWrapper">
                <Route exact path='/'>
                    <Home headerText={this.props.headerText} headerHandler={this.props.headerHandler} sidebar={this.props.sidebar} />
                </Route>
                <Route path='/about'>
                    <About headerText={this.props.headerText} headerHandler={this.props.headerHandler} />
                </Route>
                <Route path='/work'>
                    <Work headerText={this.props.headerText} headerHandler={this.props.headerHandler} />
                </Route>
                <Route path='/hobbies'>
                    <Hobbies headerText={this.props.headerText} headerHandler={this.props.headerHandler} />
                </Route>
                <Route path='/contact'>
                    <Contact headerText={this.props.headerText} headerHandler={this.props.headerHandler} />
                </Route>
            </div>
        )
    }
}

    export default Info