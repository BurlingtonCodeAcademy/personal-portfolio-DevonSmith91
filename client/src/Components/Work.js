import React from 'react'
import Header from './Header.js'
import geoVTThumb from '../Images/geo-vt-thumb.png'
import yelpThumb from '../Images/yelpington-thumb.png'
import blogThumb from '../Images/mockblog-thumb.png'

// setting up the work class

class Work extends React.Component {
    // on mounting, adjust header title
    componentDidMount() {
        this.props.headerHandler()
    }
    // render the page
    render() {
        return (
            <div id='formatWrapper'>
                <div id='headerContainer'>
                    {/* calling the Header for the work Page */}
                    <Header headerText={this.props.headerText} />
                </div>
                {/* general information on the work page */}
                <div id='formatContainer'>
                    <div id='workContent'>
                        <div id='languages'>
                            {/* Coding related skills */}
                            <div id='workSubTitle'>
                                Code Skills:
                            </div>
                            <ul id='workText'>
                                <li>JavaScript</li>
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>React JS</li>
                                <li>Express JS</li>
                                <li>Mongo DB</li>
                            </ul>
                            {/* Personal Skills */}
                            <div id='workSubTitle'>
                                Soft Skills
                            </div>
                            <ul id='workText'>
                                <li>Self Motivated</li>
                                <li>Experienced with teaching</li>
                                <li>Leading a team</li>
                                <li>Working on a team</li>
                                <li>Time Managment</li>
                            </ul>
                        </div>
                        {/* examples of my projects and their descriptions as well as what will be links to the page and github repos */}
                        <div id='workExamples'>
                            <div id='workProjects'>
                                <img className='picture' src={geoVTThumb} alt="Geo VT Thumbnail" />
                                <div id='projectText'>
                                    <div id='workSubTitle'>Geo Vermonter</div>
                                    <div id='workDescription'>
                                        react project using map manipulation and some other junk
                                </div>
                                </div>
                            </div>
                            <div id='workProjects'>
                                <img className='picture' src={yelpThumb} alt='Yelpington Thumbnail' />
                                <div id='projectText'>
                                    <div id='workSubTitle'>Yelpington</div>
                                    <div id='workDescription'>
                                        A Mock Yelp app based on a couple of restaurants from downtown Burlington.
                                    </div>
                                </div>
                            </div>
                            <div id='workProjects'>
                                <img className='picture' src={blogThumb} alt='Fake Blog Thumbnail' />
                                <div id='projectText'>
                                    <div id='workSubTitle'>Mock Blog</div>
                                    <div id='workDescription'>
                                        A Mock Blog to show 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work