import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapComponent extends Component {


    render() {

        const style = {
            width: '100%',
            height: '100%'
        }

        return (
            <div>
                <Map
                    google={this.props.google}
                    style={style}
                    initialCenter={{
                        lat: 31.2089829,
                        lng: 29.8802905
                    }}
                    zoom={13}
                    onClick={this.onMapClicked}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBVBLrDCMVaRE80NoycGitl4YIDyTZbNdA'),
    LoadingContainer: MapComponent
})(MapComponent)