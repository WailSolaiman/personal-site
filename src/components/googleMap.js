import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyD9HL-XBW0ak9kihukNoEOA06cYeivUNtk',
        }}
        defaultCenter={{
          lat: 53.86,
          lng: 10.68,
        }}
        defaultZoom={11}>
        <AnyReactComponent lat={53.863027} lng={10.68229} text="My Marker" />
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap
