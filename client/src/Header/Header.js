import React from 'react'
import './header.css'
import arrow from '../Images/arrow.png'

function Header(props) {
    return (
        <div id='headerWrapper'>
            <div id='headerContainer'>
                <div id='headerHome' onClick={props.sidebarHandler}><img style={{transform: `rotate(${props.rotate}deg)`, transition: '.5s all ease'}  } id='dropdown' alt='dropdown' src={arrow} /></div>   
            </div>
        </div>
    )
}

export default Header