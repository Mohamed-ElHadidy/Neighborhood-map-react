import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class MapComponent extends Component {


    render() {

        const { google, onMapClicked, places, onMarkerClick, activeMarker, showingInfoWindow, selectedPlaces } = this.props;

        console.log(places)
        return (

            <div >
                <Map
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
                            name={place.name}
                            position={{
                                lat: place.latlong.lat,
                                lng: place.latlong.lng
                            }}
                            animation={google.maps.Animation.DROP}
                            onClick={onMarkerClick}
                        />
                    )}

                    <InfoWindow
                        marker={activeMarker}
                        visible={showingInfoWindow}
                    >
                        <div>
                            <h1>{selectedPlaces.name}</h1>
                        </div>
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