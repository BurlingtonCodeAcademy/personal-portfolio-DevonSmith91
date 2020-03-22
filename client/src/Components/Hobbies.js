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
                    This will be the things i like
            </div>
            </div>
        )
    }
}

export default Hobbies