import React from 'react'
import '../Styles/App.css'
import Header from './Header.js'

class About extends React.Component {

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
                    <div id='aboutContent'>
                        <div id='aboutText'>
                            <div id='aboutTitle'>
                                Hey, I'm Devon.
                            </div>
                            <div id='aboutSubTitle'>
                                How I got here
                            </div>
                            <div id='aboutWriting'>
                                Ever since I can remember, I have considered myself an Artist. Whether it was as a child with crayons, a teenager with pencils and ink, an adolescent with a camera in hand or an adult using glass as my medium, art has been a passion of my life and continues to be on a daily basis. With a recent venture into web development, I have found that my attention to detail and my desire to create beautiful work has been a smooth transition.
                            </div>
                            <div id='aboutSubTitle'>
                                Where I'm going
                            </div>
                            <div id='aboutWriting'>
                                The World is my oyster! As of right now I am currently looking for an opportunity for employment, preferably in the North East or doing remote work, that will allow me to continue to learn and will encourage me to encorporate my artistic talents into my development work.
                            </div>
                        </div>
                        <div id='aboutPhoto'>
                            <div>
                            THIS WILL BE A PHOTO OF ME
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default About