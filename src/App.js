import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

import './App.css';
import MapComponent from './MapComponent';
import Header from './Header';
import Menu from './Menu';
import * as places  from './places';

class App extends Component {

  state = {
    places: [],

    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    query: ''
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
  
// to update query stat depending on search input value
  updateQuery = (query) => {
    this.setState({ query })
  }

  render() {

    const { places, activeMarker, showingInfoWindow, selectedPlace, query } = this.state;

    //To filter the places list as i learnead from the course
    let showingPlaces;
    if (query.trim() !== '') {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingPlaces = places.filter((place) => match.test(place.name));
      // if the their is no matching place empty the list
      if (match.length === 0) {
        showingPlaces = [];
      }
      // if the query is empty show the full list
    } else {
      showingPlaces = places;
    }
    // sort the places by name
    showingPlaces.sort(sortBy('name'))

    console.log(places);

    return (
      <div className="App">

        <Header />
        <Menu
          places={showingPlaces}
          onMarkerClick={this.onMarkerClick}
          activeMarker={activeMarker}
          showingInfoWindow={showingInfoWindow}

          query={this.state.query}
          updateQuery={this.updateQuery}
        />

        <MapComponent

          places={showingPlaces}
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
