import React, { Component } from 'react';
import './App.css';
// class app extends React.Component 
class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'A passionate developer',
      imgSrc: 'https://example.com/profile.jpg',
      profession: 'Software Engineer'
    },
    show: false,
    mountTime: new Date()
  };

  // for toggling the profile
  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, show, mountTime } = this.state;

    // the display

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mount: {Math.floor((new Date() - mountTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;
