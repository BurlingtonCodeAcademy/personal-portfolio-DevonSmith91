import React from 'react'
import { Switch, Route } from 'react-router'
import About from "./About.js"
import Home from "./Home.js"
import Works from "./Works.js"
import Hobbies from "./Hobbies.js"
import Contact from "./Contact.js"
import '../Styles/info.css'

function Info(props) {
    return(
        <Switch id="infoWrapper">
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Works' component={Works} />
            <Route path='/Hobbies' component={Hobbies} />
            <Route path='/Contact' component={Contact} />
        </Switch>
    )
}

export default Info