import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


export class MapComponent extends Component {
    

    render() {
        
        console.log(this.props.places)
        return (
            
            <div>
                <Map 
                    google={this.props.google}
                    
                    initialCenter={{
                        lat: 31.2089829,
                        lng: 29.8802905
                    }}
                    zoom={13}

                >
               

                    {this.props.places.map(place =>

                        <Marker
                            key={place.id}
                            name={place.name}
                            position={{
                                lat: place.latlong.lat,
                                lng: place.latlong.lng
                            }}
                            animation= {this.props.google.maps.Animation.DROP}

                        />

                    )}

                </Map>

            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBVBLrDCMVaRE80NoycGitl4YIDyTZbNdA'),
    //LoadingContainer: MapComponent
})(MapComponent)