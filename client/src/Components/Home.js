import React from 'react'
import '../Styles/App.css'
import Header from './Header.js'

class Home extends React.Component {

    componentDidMount() {
        this.props.headerHandler()
    }

    render() {
        return (
            <div id='formatWrapper'>
                <div id='headerContainer'>
                    <Header headerText={this.props.headerText} sidebar={this.props.sidebar}/>
                </div>
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
