import React, { Component } from 'react';


class Menu extends Component {

    state = { visible: false }

    handleClick = () => { this.setState(prev => ({ visible: !prev.visible })) }

    render() {

        const { query, places, connectLiToMarker, updateQuery } = this.props;
        const { visible } = this.state;

        const style = {
            'zIndex': '1',
            'position': 'absolute'
        }

        return (
            <div className={visible ? 'slideIn menu' : 'slideOut menu'}
                tabIndex={visible ? '0' : '-1'}
                style={style}>

                <input
                    className="search-input"
                    type="text"
                    placeholder="Search by title"
                    value={query}
                    onChange={(e) => updateQuery(e.target.value)}
                    aria-label={`search for museum by name`}
                />

                <button className="menu-btn" onClick={this.handleClick}>Menu &#x268C;</button>

                <ol>
                    {places.map(place =>

                        <li
                            key={place.name}
                            aria-label={`show the ${place.name} info window`}
                            onClick={(e) => connectLiToMarker(place)}
                        >{place.name}
                        </li>

                    )}
                </ol>

            </div>
        )
    }

}

export default Menu;