import React from 'react';
import Sidebar from './Sidebar.js'
import Info from './info.js'
import '../Styles/App.css';
import arrow from '../Images/arrow-invert.png'

class App extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      sidebar: false,
      rotate: 270,
      home: true,
      about: false,
      contact: false,
      hobbies: false,
      work: false,
      headerText: '',
      currentPath: undefined,
    }
  }

  pageUpdate = () => {
    if (this.state.currentPath !== window.location.pathname) {
      if (window.location.pathname === '/') {
        this.setState({
          home: true,
          about: false,
          contact: false,
          hobbies: false,
          work: false,
          currentPath: window.location.pathname,
          headerText: 'Devon Smith'
        })
      } else if (window.location.pathname === '/about') {
        this.setState({
          home: false,
          about: true,
          contact: false,
          hobbies: false,
          work: false,
          currentPath: window.location.pathname,
          headerText: 'About'
        })
      } else if (window.location.pathname === '/work') {
        this.setState({
          home: false,
          about: false,
          contact: false,
          hobbies: false,
          work: true,
          currentPath: window.location.pathname,
          headerText: 'Work'
        })
      } else if (window.location.pathname === '/hobbies') {
        this.setState({
          home: false,
          about: false,
          contact: false,
          hobbies: true,
          work: false,
          currentPath: window.location.pathname,
          headerText: 'Hobbies'
        })
      } else if (window.location.pathname === '/contact') {
        this.setState({
          home: false,
          about: false,
          contact: true,
          hobbies: false,
          work: false,
          currentPath: window.location.pathname,
          headerText: 'Contact Me'
        })
      }
    }
  }

  contentHandler = (event) => {
    if (event.target.id === 'homeLink') {
      this.setState({
        home: true,
        about: false,
        contact: false,
        hobbies: false,
        work: false,
        currentPath: window.location.pathname,

      })
    } else if (event.target.id === 'aboutLink') {
      this.setState({
        home: false,
        about: true,
        contact: false,
        hobbies: false,
        work: false,
        currentPath: window.location.pathname,

      })
    } else if (event.target.id === 'workLink') {
      this.setState({
        home: false,
        about: false,
        contact: false,
        hobbies: false,
        work: true,
        currentPath: window.location.pathname,

      })
    } else if (event.target.id === 'hobbiesLink') {
      this.setState({
        home: false,
        about: false,
        contact: false,
        hobbies: true,
        work: false,
        currentPath: window.location.pathname,

      })
    } else if (event.target.id === 'contactLink') {
      this.setState({
        home: false,
        about: false,
        contact: true,
        hobbies: false,
        work: false,
        currentPath: window.location.pathname,
      })
    }
  }

  headerHandler = () => {
    if (this.state.home === true) {
      this.setState({
        headerText: 'Devon Smith'
      })
    } else if (this.state.about === true) {
      this.setState({
        headerText: 'About'
      })
    } else if (this.state.contact === true) {
      this.setState({
        headerText: 'Contact Me'
      })
    } else if (this.state.hobbies === true) {
      this.setState({
        headerText: 'Hobbies'
      })
    } else if (this.state.work === true) {
      this.setState({
        headerText: 'Work'
      })
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
        <div id='leftSide'>
          {/* Arrow click picture */}
          <div id='headerArrow' onClick={this.sidebarHandler}>
            {/* Changing the state of animation on the arrow based on if the sidebar is open or not */}
            {this.state.sidebar ? <img style={{ transform: `rotate(${this.state.rotate}deg)`, transition: '.5s all ease' }} id='dropdownOpen' alt='dropdown arrow' src={arrow} /> : <img style={{ transform: `rotate(${this.state.rotate}deg)`, transition: '.5s all ease' }} id='dropdownClosed' alt='dropdown arrow' src={arrow} />}
          </div>
          {/* Sidebar Section */}
          <div id='sidebar'>
            {/* Deciding if the sidebar is showing or now */}
            {this.state.sidebar ? <Sidebar aboutHandler={this.aboutHandler} about={this.state.about} contentHandler={this.contentHandler} /> : null}
          </div>
          {/* container holding the Info page */}
        </div>
        <Info pageUpdate={this.pageUpdate}headerText={this.state.headerText} headerHandler={this.headerHandler} sidebar={this.state.sidebar} />
      </div>

    );
  }
}

export default App;
