import React, { Component } from 'react';


class Menu extends Component {

    state = { visible: false }

    handleClick = () => {this.setState(prev => ({ visible: !prev.visible }))}

    render() {

        const style = {
            'z-index': '1',
            'position': 'absolute'
           

        }

        return (
            <div  className= {this.state.visible ? 'slideIn menu' : 'slideOut menu'}
            style={style}>
<div >
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
</div>
                    <button className="menu-btn" onClick={this.handleClick}>Menu &#x268C;</button>

            </div>
        )

    }

}

export default Menu;