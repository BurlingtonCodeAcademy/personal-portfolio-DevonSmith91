import React from 'react'
import Header from './Header'

class Hobbies extends React.Component {
    // on mounting, adjust header title
    componentDidMount() {
        this.props.headerHandler()
    }
    // render the page
    render() {
        return (
            <div id='formatWrapper'>
                <div id='headerContainer'>
                    {/* calling the Header for the hobbies Page */}
                    <Header headerText={this.props.headerText} />
                </div>
                {/* general information on hobbies page */}
                <div id='formatContainer'>
                    <div id='hobbiesContent'>
                        <div id='hobbiesLeftSide' className='hobbieText'>
                            {/* At this point this is just a small collection of things that I'm into. I want to expand on this and turn it more into paragraphs vs just bullets */}
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
                        {/* Go into more detail about the things I enjoy doing and being a part of. */}
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