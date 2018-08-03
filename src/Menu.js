import React, { Component } from 'react';


class Menu extends Component {

    render() {

        return (
            <div  className="menu">

                <input
                    className="search-input"
                    type="text"
                    placeholder="Search by title"
                    value={this.props.query}
                    onChange={(e) => this.props.updateQuery(e.target.value)}
                />

                <ol>
                    {this.props.places.map(place =>



                        <li
                            key={place.name}
                            onClick={() => this.props.onMarker(place, this.props.activeMarker)}
                        >{place.name}
                        </li>


                    )}
                </ol>

                    <button className="menu-btn">Menu &#x268C;</button>

            </div>
        )

    }

}

export default Menu;