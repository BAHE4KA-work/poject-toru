// utils/fetchORSRoute.js
import axios from 'axios';

export const fetchORSRoute = async (points, apiKey) => {
  const coords = points.map(p => [p.longitude, p.latitude]);

  const body = {
    coordinates: coords,
    format: 'geojson',
  };

  const res = await axios.post(
    'https://api.openrouteservice.org/v2/directions/driving-car/geojson',
    body,
    {
      headers: {
        Authorization: apiKey,
        'Content-Type': 'application/json',
      },
    }
  );

  const geometry = res.data.features[0].geometry.coordinates;
  return geometry.map(([lon, lat]) => ({ latitude: lat, longitude: lon }));
};
