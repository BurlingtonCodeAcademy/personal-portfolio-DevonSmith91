import React from 'react'
import '../Styles/App.css'
import Header from './Header.js'

// creating a class for the Home Page

class Home extends React.Component {
    // on mounting, adjust header title
    componentDidMount() {
        this.props.headerHandler()
    }
    // render the page
    render() {
        return (
            <div id='formatWrapper'>
                <div id='headerContainer'>
                    {/* calling the Header for the home Page */}
                    <Header headerText={this.props.headerText} sidebar={this.props.sidebar}/>
                </div>
                {/* general information on home page */}
                <div id='formatContainer'>
                    <div id='homeTitle'>
                        Full Stack Web Developer.
                    </div>
                    <div id='quote'>
                        <div className='quoteText lineOne'>
                            "What would you attempt to do,
                        </div>
                        <div className='quoteText lineTwo'>
                            if you knew you would not fail?"
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home
