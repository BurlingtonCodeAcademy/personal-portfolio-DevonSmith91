import React from 'react'
import '../Styles/sidebar.css'
import FadeIn from 'react-fade-in'
import { Link } from 'react-router-dom'

function Sidebar(props) {
    return (
        <div id='sidebarWrapper'>
            <div>
                <FadeIn className='sidebarContainer' delay='100' transitionDuration='400'>
                    <div></div>
                    <Link to='/' className='options'>Home</Link>
                    <Link to='/About' className='options'>About </Link>
                    <Link to='/Works' className='options'>Works</Link>
                    <Link to='/Hobbies' className='options'>Hobbies</Link>
                    <Link to='/Contact' className='options'>Contact</Link>
                </FadeIn>
            </div>

        </div>
    )
}

export default Sidebar