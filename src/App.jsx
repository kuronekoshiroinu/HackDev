import { useState, useRef } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import 'tailwindcss/tailwind.css'
import { GMap } from "./components/Maps/GMap"
import { Board } from "./components/Board/Board"
import { Header, Footer } from "./components/Body/Body"
import { WeatherContext } from "./components/Body/BodyContext"
import { InfoCard } from "./components/InfoCard/InfoCard"
import { GameContext } from "./components/Body/BodyContext"
import PLACES from "./assets/places"

const LOCATIONS = Object.keys(PLACES).map(key => PLACES[key])

function App() {
  const [currentloc, setLocation] = useState(LOCATIONS[0]);
  const [bgWeather, setBgWeather] = useState(LOCATIONS[0].bg);
  const [arrowDir, setArrowDir] = useState(null)
  const locID = useRef(0)

  // const handleClick = () => {
  //   // TOREMOVE: instead use goalArrowDirection
  //   locID.current = locID.current + 1
  //   if (locID.current > (LOCATIONS.length - 1)) locID.current = 0
  //   setLocation(LOCATIONS[locID.current])
  //   setBgWeather(LOCATIONS[locID.current].bg)
  //   console.log("APP: Changing weather")
  // }

  const goalArrowDirection = function (newGoalDir) {
    // replace handleClick
    console.log(`APP: goto new dir ${newGoalDir}`)
    locID.current = locID.current + 1
    if (locID.current > (LOCATIONS.length - 1)) locID.current = 0
    setLocation(LOCATIONS[locID.current])
    setBgWeather(LOCATIONS[locID.current].bg)
    setArrowDir(newGoalDir)
    console.log("APP: Changing weather")
  }

  return (
    <div className={`bg-cover w-full min-h-screen ${bgWeather}`}>
      <Header />
      <div className="grid grid-cols-2 p-4 place-content-center">
        <GameContext.Provider value={{goalArrowDirection}}>
          <Board />
          <WeatherContext.Provider value={currentloc}>
            <GMap />
            {/* <div><button className="bg-orange-500 text-neutral-700 rounded-lg w-36 h-auto " onClick={handleClick}> CambiarClima</button></div> */}
            <div/>
            <InfoCard />
          </WeatherContext.Provider>
        </GameContext.Provider>
      </div>
      <Footer />
    </div>
    // <BrowserRouter>   
    // <Routes>
    //   <Route path="/" element={<Navigate to ="/home"/>} />
    //   <Route path="/home" element={<Pag1/>}/>
    //   <Route path="/algo1" element={<pag2/>}/>
    //   <Route path="/algo2" element={<pag3/>}/>
    // </Routes>
    // </BrowserRouter>  
  )
}

export default App


