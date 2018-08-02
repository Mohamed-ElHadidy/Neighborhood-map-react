import React, { Component } from 'react';

import './App.css';
import MapComponent from './MapComponent';
import Header from './Header'
import Menu from './Menu'
import { places } from './places'

class App extends Component {

  state = {
    places: [],

    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

  }

  componentDidMount() {
    this.setState({ places })
  }

  onMarkerClick = (dist, marker) =>
    this.setState({
      selectedPlace: dist,
      activeMarker: marker,
      showingInfoWindow: true
    });
/*
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
*/
  render() {

    const { places, activeMarker, showingInfoWindow, selectedPlace } = this.state;

    console.log(places);
    return (
      <div className="App">

        <Header />
        <Menu 
          places={places}
          onMarker={this.onMarkerClick}
          activeMarker={activeMarker}
        />

        <MapComponent

          places={places}
          onMapClicked={this.onMapClicked}
          onMarkerClick={this.onMarkerClick}
          activeMarker={activeMarker}
          showingInfoWindow={showingInfoWindow}
          selectedPlaces={selectedPlace}

        />

        
      </div>
    );
  }
}

export default App;
