import React from 'react'
import '../Styles/App.css'
// Function to determine what the header design looks like and what the context of the header is
function Header(props) {
    return (
        <div id='headerContainer'>
            {/* deciding if the line is underlining or an underscore */}
            {props.sidebar ? <div id='drawnLineOpenHome'></div> : <div id='drawnLine'></div>}
            <div id='headerText'>
                {/* deciding on the text of the header */}
                {props.headerText}
            </div>
        </div>
    )
}

export default Header