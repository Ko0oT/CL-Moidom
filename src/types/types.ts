import { LatLngTuple } from 'leaflet';
import { Location as LocationRouter } from 'react-router-dom';

export type Location = {
  id: number;
  address: string;
  coords: LatLngTuple;
}

export type LocationProps = {
  state: {
    from: LocationRouter;
  };
};
