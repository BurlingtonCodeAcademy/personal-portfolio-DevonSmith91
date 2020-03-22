import React from 'react'
import '../Styles/App.css'
import FadeIn from 'react-fade-in'
import { Link } from 'react-router-dom'

function Sidebar(props) {
    return (
        <div id='sidebarWrapper'>
            <div>
                <FadeIn className='sidebarContainer' delay='100' transitionDuration='400'>
                    <div></div>
                    <Link to='/' className='options' id='homeLink' onClick={props.contentHandler}>Home</Link>
                    <Link to='/about' className='options' id='aboutLink' onClick={props.contentHandler}>About </Link>
                    <Link to='/projects' className='options' id='projectsLink' onClick={props.contentHandler}>Projects</Link>
                    <Link to='/hobbies' className='options' id='hobbiesLink' onClick={props.contentHandler}>Hobbies</Link>
                    <Link to='/contact' className='options' id='contactLink' onClick={props.contentHandler}>Contact</Link>
                </FadeIn>
            </div>
        </div>
    )
}

export default Sidebar