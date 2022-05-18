import React from 'react';
import {
    Popup,
    Marker
} from 'react-leaflet';
import {Icon} from 'leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {useSelector} from "react-redux";

const icon = new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]});

const MapMarker = () => {
    const mapState = useSelector(state => state);
    return (
        <Marker
            key={mapState.regionalInfo.name}
            position={mapState.coordinates}
            icon={icon}>
            <Popup>
                {mapState.regionalInfo.name}
            </Popup>
        </Marker>
    );
};

export default MapMarker;
