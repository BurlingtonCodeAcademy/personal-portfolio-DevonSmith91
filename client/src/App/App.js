import React from 'react';
import Header from '../Header/Header.js'
import Sidebar from '../Sidebar/Sidebar.js'
import About from '../About/About.js'
import './App.css';

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

  aboutHandler = () => {
    this.setState(prevState => ({
      about: !prevState.about
    }))
  }

  render() {
    return (
      <div id="App" >
        <Header sidebarHandler={this.sidebarHandler} rotate={this.state.rotate} />
        <div id='midContainer'>
          {this.state.sidebar ? <Sidebar aboutHandler={this.aboutHandler} about={this.state.about} /> : null}
          {this.state.about ? <About /> : null}
        </div>
      </div>
    );
  }
}

export default App;
