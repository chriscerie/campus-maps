/* eslint-disable eqeqeq */
import axios from 'axios';
import { Map } from 'mapbox-gl';
import { LocationType } from '../types/LocationType';

export function getLocationInfo(
  id: string,
  mapInstance?: Map
): Promise<LocationType | undefined> {
  return axios
    .get<LocationType>(`/api/v1/locations/loc/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((_err) => {
      if (mapInstance) {
        const createLocationInfo = () => {
          const points = mapInstance.querySourceFeatures('composite', {
            sourceLayer: 'poi_label',
          });

          const point = points.filter((point) => point.id == id)[0];

          if (point && point.properties) {
            // Request to create location data
            return axios
              .post<LocationType>(`/api/v1/locations/loc/${id}`, {
                id: point.id,
                name: point.properties.name,
                type: point.properties.category_en || point.properties.type,
                // @ts-ignore
                tile: point.tile,
              })
              .then((res) => {
                return res.data;
              });
          }
        };

        if (mapInstance.isStyleLoaded()) {
          return createLocationInfo();
        } else {
          mapInstance.once('loaded', () => {
            return createLocationInfo();
          });
        }
      }
    });
}
