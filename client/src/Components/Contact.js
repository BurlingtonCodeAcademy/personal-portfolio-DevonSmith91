import React from 'react'
import Header from './Header.js'

class Contact extends React.Component {
    // on mounting, adjust header title
    componentDidMount() {
        this.props.headerHandler()
    }
    // render the page
    render() {
        return (
            <div id='formatWrapper'>
                <div id='headerContainer'>
                    {/* calling the Header for the contact Page */}
                    <Header headerText={this.props.headerText} />
                </div>
                {/* general information on the contacts page */}
                <div id='formatContainer'>
                    <div id='genericID'>
                        <div>
                        Why do you really need to contact me
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact