import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import newMarker from '../data/pin.png'
//import styles from './custom-marker-and-popup.module.css'
import tileLayer from '../util/tileLayer'
import axios from 'axios'

const center = [52.22977, 21.01178]

/* const pointerIcon = new L.Icon({
  iconUrl: newMarker,
  iconSize: [50, 58], // size of the icon
  iconAnchor: [20, 58], // changed marker icon position
  popupAnchor: [0, -60], // changed popup position
}) */

const customPopup = (
  <iframe
    width="auto"
    title="Marek Grechuta"
    height="310"
    src="https://www.youtube.com/embed/glKDhBuoRUs"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
)

const MapWrapper = () => {
  const [geo, setGeo] = useState([])
  const [nGeo, setNGeo] = useState([])

  const [center, setCenter] = useState([52.22977, 21.01178])
  //52.22977, 21.01178 // old center

  const pointerIcon = new L.Icon({
    iconUrl: newMarker,
    iconSize: [50, 58], // size of the icon
    // iconAnchor: [20, 58],
    iconAnchor: [center[1], center[0]], // changed marker icon position
    popupAnchor: [0, -60], // changed popup position
  })

  const countryName = 'Albania'

  const getCountryGeo = async () => {
    const res = axios
      .get(
        `https://nominatim.openstreetmap.org/search?q=${countryName}&polygon_geojson=1&format=json`
      )
      .then((res) => {
        console.log('res.data[0]', res.data[0])
        const lat = Number(res.data[0].lat)
        const lon = Number(res.data[0].lon)
        return setCenter([lat, lon])
      })
    return res
  }

  useEffect(() => {
    getCountryGeo()
  }, [])

  console.log('center', center)

  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={true}>
      <TileLayer {...tileLayer} />

      <Marker icon={pointerIcon} position={center}>
        <Popup 
      //  className={styles.newPopup} 
        minWidth={300}>
          {customPopup}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapWrapper
