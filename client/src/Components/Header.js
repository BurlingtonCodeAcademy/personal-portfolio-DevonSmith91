import React from 'react'
import '../Styles/App.css'

function Header(props) {
    return (
        <div id='headerContainer'>
            {props.sidebar ? <div id='drawnLineOpenHome'></div> : <div id='drawnLine'></div>}
            <div id='headerText'>
                {props.headerText}
            </div>
        </div>
    )
}

export default Header