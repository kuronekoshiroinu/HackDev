import { useEffect, useState, useContext } from 'react';
import { Marker } from '@vis.gl/react-google-maps';
import { WeatherContext } from '../Body/BodyContext';

export const MarkerMove = () => {
  const weather = useContext(WeatherContext)
  const [position, setPosition] = useState(weather.latlng);

  useEffect(() => {
    console.log("MARKER changing place")
    setPosition(weather.latlng)
  }, [weather]);

  return <Marker position={position}></Marker>;
};