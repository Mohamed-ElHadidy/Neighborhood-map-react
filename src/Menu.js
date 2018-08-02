import React, { Component } from 'react';


class Menu extends Component {

    render() {

        return (
            <div>
                <ol>
                    {this.props.places.map(place =>



                        <li 
                        key={place.name}
                        onClick={()=>this.props.onMarker(place, this.props.activeMarker)}

                        >{place.name}
                        </li>


                    )}
                </ol>

            </div>
        )

    }

}

export default Menu;