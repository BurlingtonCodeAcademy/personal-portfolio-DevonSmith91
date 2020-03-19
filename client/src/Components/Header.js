import React from 'react'
import '../Styles/header.css'
import arrow from '../Images/arrow-invert.png'

function Header(props) {
    return (
        <div id='headerWrapper'>
            <div id='headerContainer'>
                <div id='headerHome' onClick={props.sidebarHandler}>
                    <img style={{ transform: `rotate(${props.rotate}deg)`, transition: '.5s all ease' }} id='dropdown' alt='dropdown' src={arrow} />
                </div>
                <div id='headerText'>
                    <div id='fadeUnderscore'>
                        _
                    </div>
                    <div>
                        Devon Smith
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header