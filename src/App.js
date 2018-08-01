import React, { Component } from 'react';

import './App.css';
import MapComponent from './MapComponent';
import Header from './Header'
import { places } from './places'

class App extends Component {

  state = {
    places: []

  }

  componentDidMount(){
    this.setState({places})
  }

  render() {

    console.log(places);
    return (
      <div className="App">

        <Header />

        <MapComponent
        
          places={this.state.places}
        />
         
      </div>
    );
  }
}

export default App;
