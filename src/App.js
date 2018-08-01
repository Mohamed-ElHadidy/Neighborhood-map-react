import React, { Component } from 'react';

import './App.css';
import MapComponent from './MapComponent';
import Header from './Header'
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

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {

    const { places, activeMarker, showingInfoWindow, selectedPlace } = this.state;

    console.log(places);
    return (
      <div className="App">

        <Header />

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
