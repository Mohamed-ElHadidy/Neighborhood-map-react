import React, { Component } from 'react';


class Menu extends Component {

    state = { visible: false }

    handleClick = () => { this.setState(prev => ({ visible: !prev.visible })) }

    render() {

        const style = {
            'zIndex': '1',
            'position': 'absolute'
        }

        return (
            <div className={this.state.visible ? 'slideIn menu' : 'slideOut menu'}
                     tabIndex={this.state.visible ? '0' : '-1'}
                style={style}>

                <input
                    className="search-input"
                    type="text"
                    placeholder="Search by title"
                    value={this.props.query}
                    onChange={(e) => this.props.updateQuery(e.target.value)}
                    ariaRole={`search for museum by name`}
                />

                <button className="menu-btn" onClick={this.handleClick}>Menu &#x268C;</button>

                <ol>
                    {this.props.places.map(place =>

                        <li
                            key={place.name}
                            ariaRole={`show the ${place.name} info window`}
                            onClick={(e) => this.props.connectLiToMarker(place)}
                        >{place.name}
                        </li>

                    )}
                </ol>

            </div>
        )
    }

}

export default Menu;