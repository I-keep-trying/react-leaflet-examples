import React, {useRef} from 'react';
import {Layout} from 'antd';
import {MapContainer, TileLayer} from 'react-leaflet';
import MapMarker from "./MapMarker";
import MapCard from "./MapCard";
import MapForm from "./MapForm";

const {Content} = Layout;

const MainContent = () => {
    const mapRef = useRef(null);

    return (
        <Content
            className="site-layout-background"
            style={{
                flex: 1,
                minHeight: 280,
                flexDirection: 'row'
            }}
        >
            <MapContainer
                whenCreated={mapInstance => {
                    mapRef.current = mapInstance
                }}
                style={{height: "100%", width: "100%"}}
                center={[20.593684, 78.96288]}
                zoom={4}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapMarker />
                <MapForm mapRef={mapRef} />
                <MapCard />
            </MapContainer>
        </Content>
    );
};

export default React.memo(MainContent);
