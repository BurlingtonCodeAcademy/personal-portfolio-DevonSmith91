import React from 'react'
import '../Styles/App.css'
import FadeIn from 'react-fade-in'
import { Link } from 'react-router-dom'
// function setting the sidebar with links to each page
function Sidebar(props) {
    return (
        <div id='sidebarWrapper'>
            <div>
                {/* Fades the links onto the page in a classy way */}
                <FadeIn className='sidebarContainer' delay='100' transitionDuration='400'>
                    <div></div>
                    {/* Link to the home page that's connected to the router */}
                    <Link to='/' className='options' id='homeLink' onClick={props.contentHandler}>Home</Link>
                    {/* Link to the about page */}
                    <Link to='/about' className='options' id='aboutLink' onClick={props.contentHandler}>About </Link>
                    {/* link to the work page */}
                    <Link to='/work' className='options' id='workLink' onClick={props.contentHandler}>Work</Link>
                    {/* link to the hobbies page */}
                    <Link to='/hobbies' className='options' id='hobbiesLink' onClick={props.contentHandler}>Hobbies</Link>
                    {/* link to the contact page */}
                    <Link to='/contact' className='options' id='contactLink' onClick={props.contentHandler}>Contact</Link>
                </FadeIn>
            </div>
        </div>
    )
}

export default Sidebar