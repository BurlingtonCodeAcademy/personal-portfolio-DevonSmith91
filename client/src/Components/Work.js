import React from 'react'
import Header from './Header.js'
import geoVTThumb from '../Images/geo-vt-thumb.png'
import yelpThumb from '../Images/yelpington-thumb.png'
import blogThumb from '../Images/mockblog-thumb.png'

class Work extends React.Component {

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
                    <div id='workContent'>
                        <div id='languages'>
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