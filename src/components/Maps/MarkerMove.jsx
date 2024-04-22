import { useEffect, useState, useContext } from 'react';
import { Marker } from '@vis.gl/react-google-maps';
import { WeatherContext } from '../Body/BodyContext';

export const MarkerMove = () => {
  const weather = useContext(WeatherContext)
  const [position, setPosition] = useState(weather.latlng);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   const t = performance.now();
    //   const lat = position.lat + (weather.lat)
    //   const lng = Math.cos(t / 3000) * 5;

    //   setPosition({lat, lng});
    // }, 100);

    // return () => clearInterval(interval);
    console.log("MARKER changing place")
    setPosition(weather.latlng)
  }, [weather]);

  return <Marker position={position}></Marker>;
};