import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib'

const Map = ({ searchResult }) => {
  const [selectedLocation, setSelectedLocation] = useState({})
  const coordinates = searchResult.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }))
  const center = getCenter(coordinates)
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/kyoya/cks2k4pu619t518jul4otpbjs"
      mapboxApiAccessToken={process.env.MAPBOX_KEY}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResult.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="text-2xl cursor-pointer animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {/* popup */}
          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
