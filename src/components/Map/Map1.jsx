import React, { Component } from 'react';
import './Map.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

class SimpleExample extends React.Component {
    constructor() {
        super();
        this.state = {
            markers: [[34.5875, 58.4477]]
        };
    }

    addMarker = (e) => {
        const { markers } = this.state;
        // markers.pop();
        markers.push(e.latlng);
        this.setState({ markers });
    }

    render() {
        let DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });
        L.Marker.prototype.options.icon = DefaultIcon;

        return (
            <div>
                <Map
                //Capa principal del mapa que controla el zoom, bordes y el centro
                    center={[-34.5875, -58.4477]}
                    onClick={this.addMarker}
                    zoom={13}
                    maxZoom={18}
                    minZoom={5}   
                    style={{width: '100%',height: '400px'}}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    {this.state.markers.map((position, idx) =>
                        <Marker key={`marker-${idx}`} position={position}>
                            <Popup>
                                <span>Popup</span>
                            </Popup>
                        </Marker>
                    )}
                </Map>
            </div>
        );
    }
}


export default SimpleExample
