import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LeafletMouseEvent } from 'leaflet';
import { COMPANY_LOCATION, DEFAULT_ZOOM, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../constants';
import { Location } from '../../types/types';

const defaultCustomIcon = L.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 36],
  iconAnchor: [14, 18],
});

const currentCustomIcon = L.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [28, 36],
  iconAnchor: [14, 18],
});

type MapProps = {
  locations?: Location[];
  myLocations?:Location[];
  handleSelectedMarkerChange?: (evt: LeafletMouseEvent) => void;
  handleNearestMarkerChange?: (evt: LeafletMouseEvent) => void;
  selectedLocationId?: number | undefined;
}

function Map({locations, myLocations, handleSelectedMarkerChange, handleNearestMarkerChange, selectedLocationId}: MapProps): JSX.Element {

  // function SingleMarker() {
  //   return (
  //     <Marker position={COMPANY_LOCATION} icon={defaultCustomIcon}>
  //     </Marker>
  //   );
  // }

  type ClicableMarkerProps = {
    location: Location;
  }

  function NearestClicableMarker({location}: ClicableMarkerProps) {
    return (
      <Marker
        position={location.coords}
        icon={currentCustomIcon}
        eventHandlers={{
          click: (evt: LeafletMouseEvent) => {
            if (handleNearestMarkerChange) {
              handleNearestMarkerChange(evt);
            }
          },
        }}
      >
      </Marker>
    );
  }


  function ClicableMarker({location}: ClicableMarkerProps) {
    return (
      <Marker
        position={location.coords}
        icon={selectedLocationId === location.id ? currentCustomIcon : defaultCustomIcon}
        eventHandlers={{
          click: (evt: LeafletMouseEvent) => {
            if (handleSelectedMarkerChange) {
              handleSelectedMarkerChange(evt);
            }
          },
        }}
      >
      </Marker>
    );
  }

  return (
    <MapContainer center={myLocations ? myLocations[0].coords : COMPANY_LOCATION} zoom={DEFAULT_ZOOM} scrollWheelZoom style={{height: '100%'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {locations?.map((it) => <ClicableMarker location={it} key={it.id} />)}
      {myLocations?.map((it) => <NearestClicableMarker location={it} key={it.id} />)}
    </MapContainer>
  );
}

export default Map;
