import React from 'react'
import Header from './Header.js'

class Contact extends React.Component {

    componentDidMount() {
        this.props.headerHandler()
    }

    render() {
        return (
            <div id='formatWrapper'>
                <div id='headerContainer'>
                    <Header headerText={this.props.headerText} />
                </div>
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