import { APIProvider, Map } from "@vis.gl/react-google-maps"

export function GMap() {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLMAP_SOME_KEY}>
      <Map
        className="min-w-64 min-h-64"
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      />
    </APIProvider>
  )
}