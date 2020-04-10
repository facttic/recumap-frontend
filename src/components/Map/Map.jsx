import React, { Component, useState } from 'react';
import './Map.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const firstNode = {
    geo: { lat: -34.586018936001786, lng: -58.48846435546876 }
}

const NodesMap = props => {
    const { nodeList } = [] | props;
    const [nodes, setNodes] = useState([firstNode]);
    const [actualNode, setActualNode] = useState(true);

    const addMarker = (e) => {
        // markers.pop();
        const newNode = {
            geo: e.latlng
        }
        setNodes(nodes.concat(newNode))  
    }

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
                    onClick={addMarker}
                    zoom={13}
                    maxZoom={18}
                    minZoom={5}   
                    style={{width: '100%',height: '400px'}}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    {nodes.map((position, idx) =>
                         <Marker key={`marker-${idx}`} position={position.geo}>
                            <Popup>
                                <span>name</span>
                            </Popup>
                         </Marker>
                       
                    )}
                </Map>
            </div>
        );
    }


export default NodesMap;
