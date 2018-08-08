import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class MapComponent extends Component {


    render() {

        const { google, onMapClicked, places, onMarkerClick, activeMarker, showingInfoWindow, selectedPlaces } = this.props;

        console.log(places)

        const style = {
            width: '100%',
            height: '100%',
        }
        return (

            <div role="application">
                <Map
                    style={style}
                    className="map"
                    google={google}
                    onMapClicked={onMapClicked}
                    initialCenter={{
                        lat: 31.2089829,
                        lng: 29.8802905
                    }}
                    zoom={13}

                >

                    {places.map(place =>
                        <Marker
                            key={place.id}
                            id={place.id}
                            ref={this.props.grabMarkersinfo}
                            name={place.name}
                            position={{
                                lat: place.location.lat,
                                lng: place.location.lng
                            }}
                            animation={(selectedPlaces.name === place.name) ? google.maps.Animation.BOUNCE : google.maps.Animation.none}
                            onClick={onMarkerClick}
                        />
                    )}

                    <InfoWindow
                        marker={activeMarker}
                        visible={showingInfoWindow}
                    >
                        {this.props.fetchError ?
                            <div>
                                <h3>{selectedPlaces.name}</h3>
                                <p>Powered by FOUR SQUARE API</p>
                            </div> :
                            <div>
                                <h3>Failed to fetch data</h3>
                            </div>
                        }

                    </InfoWindow>

                </Map>

            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBVBLrDCMVaRE80NoycGitl4YIDyTZbNdA'),
    //LoadingContainer: MapComponent
})(MapComponent)