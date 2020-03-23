import React from 'react'
import Header from './Header'

class Hobbies extends React.Component {

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
                    <div id='hobbiesContent'>
                        <div id='hobbiesLeftSide' className='hobbieText'>
                            <div id='hobbiesSubTitle'>
                                Things I like:
                            </div>
                            <ul id='hobbieText' className='hobbieList'>
                                <li>Food</li>
                                <li>Dungeons and Dragons</li>
                                <li>Soccer</li>
                                <li>My Dog</li>
                                <li>Art</li>
                                <li>Video Games</li>
                            </ul>
                        </div>
                        <div id='hobbiesRightSide' className='hobbieText'>
                            I should put more things in here that I like, Maybe as a paragraph or something?
                        </div>
                    </div>
            </div>
            </div>
        )
    }
}

export default Hobbies