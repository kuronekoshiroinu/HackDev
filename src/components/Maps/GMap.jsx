import { APIProvider, Map } from "@vis.gl/react-google-maps"
import { MarkerMove } from "./MarkerMove";

export function GMap() {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLMAP_SOME_KEY}>
      <Map
        className="min-w-64 min-h-64"
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={0}
        gestureHandling={'none'}
        disableDefaultUI={true}
      >
        <MarkerMove />
      </Map>
    </APIProvider>
  )
}