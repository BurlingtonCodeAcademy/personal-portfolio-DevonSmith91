import React from 'react'
import './sidebar.css'
import FadeIn from 'react-fade-in'

function Sidebar(props) {
    return (
        <div id='sidebarWrapper'>
            <div>
                <FadeIn className='sidebarContainer' delay='100' transitionDuration='400'>
                    <div className='options' onClick={props.aboutHandler}>About</div>
                    <div className='options'>Works</div>
                    <div className='options'>Hobbies</div>
                    <div className='options'>Contact</div>
                </FadeIn>
            </div>

        </div>
    )
}

export default Sidebar