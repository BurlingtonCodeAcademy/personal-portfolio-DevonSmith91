import React from 'react';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Info from './info.js'
import '../Styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      sidebar: false,
      about: false,
      rotate: 270,
    }
  }

  sidebarHandler = () => {
    let newRotation
    if (this.state.rotate === 270) {
      newRotation = 360;
    } else {
      newRotation = 270
    }
    this.setState(prevState => ({
      sidebar: !prevState.sidebar,
      rotate: newRotation
    })
    )
  }

  render() {
    return (
      <div id="App" >
        <Header sidebarHandler={this.sidebarHandler} rotate={this.state.rotate} />
        <div id='midContainer'>
          <div>
            {this.state.sidebar ? <Sidebar aboutHandler={this.aboutHandler} about={this.state.about} /> : null}
          </div>
          <div id='informationWrapper'>
            <div id='informationDisplay'>
              <Info />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
