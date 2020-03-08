import React, { useState } from 'react'
import { Map, Popup, TileLayer } from 'react-leaflet'
import Marker from 'react-leaflet-enhanced-marker'
import MarkerImage from '../../data/images/marker.png'

const LeafLetMap = () => {
  const [map] = useState({
    lat: 53.86304,
    lng: 10.68275,
    zoom: 17,
  })
  const position = [map.lat, map.lng]
  return (
    <Map
      center={position}
      zoom={map.zoom}
      style={{ height: '500px', width: '100%' }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        icon={
          <img src={MarkerImage} alt="marker-icon" style={{ width: '50px' }} />
        }>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  )
}

export default LeafLetMap
