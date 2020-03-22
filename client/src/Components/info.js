import React from 'react'
import { Route } from 'react-router'
import About from "./About.js"
import Home from "./Home.js"
import Projects from "./Projects.js"
import Hobbies from "./Hobbies.js"
import Contact from "./Contact.js"
import '../Styles/App.css'

function Info(props) {
    return(
        <div id="infoWrapper">
            <Route exact path='/'>
                <Home headerText={props.headerText} headerHandler={props.headerHandler} sidebar={props.sidebar}/>
            </Route>
            <Route path='/about'>
                <About headerText={props.headerText} headerHandler={props.headerHandler} />
            </Route>
            <Route path='/projects'>
                <Projects headerText={props.headerText} headerHandler={props.headerHandler} />
            </Route>
            <Route path='/hobbies'>
                <Hobbies headerText={props.headerText} headerHandler={props.headerHandler} />
            </Route>
            <Route path='/contact'>
                <Contact headerText={props.headerText} headerHandler={props.headerHandler} />
            </Route>
        </div>
    )
}

export default Info