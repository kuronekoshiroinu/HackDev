import { useState, useRef } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import 'tailwindcss/tailwind.css'
import { GMap } from "./components/Maps/GMap"
import { Board } from "./components/Board/Board"
import { Header, Footer } from "./components/Body/Body"
import { WeatherContext } from "./components/Body/BodyContext"
import { InfoCard } from "./components/InfoCard/InfoCard"
import { HealthBar } from "./components/HealthBar/HealthBar"
import { GameContext } from "./components/Body/BodyContext"
import PLACES from "./assets/places"
import notify from "./utils/utils"

const LOCATIONS = Object.keys(PLACES).map(key => PLACES[key])

function App() {
  // const [currentloc, setLocation] = useState(LOCATIONS[0]);
  // const [bgWeather, setBgWeather] = useState(LOCATIONS[0].bg);
  const [currentloc, setLocation] = useState(PLACES['u']);
  const [bgWeather, setBgWeather] = useState(PLACES['u'].bg);
  const arrowDir = useRef('u')
  const [currentHealth, setCurrentHealth] = useState(60)
  const locID = useRef(0)

  // const handleClick = () => {
  //   // TOREMOVE: instead use goalArrowDirection
  //   locID.current = locID.current + 1
  //   if (locID.current > (LOCATIONS.length - 1)) locID.current = 0
  //   setLocation(LOCATIONS[locID.current])
  //   setBgWeather(LOCATIONS[locID.current].bg)
  //   console.log("APP: Changing weather")
  // }

  const arrowDirectionStatus = function (newGoalDir) {
    // replacing handleClick
    console.log(`APP: goto new dir ${newGoalDir}`)
    arrowDir.current = newGoalDir
    setLocation(PLACES[arrowDir.current])
    setBgWeather(PLACES[arrowDir.current].bg)
    console.log("APP: Changing weather")
  }

  const healthStatus = function (newHealth) {
    const newhealth = currentHealth + newHealth
    if (newhealth < 0) {
      setCurrentHealth(0)
      notify("Me muero!", '💀')
    }
    else if (newhealth > 100) {
      notify("Aqui me quedo!", '🥳')
      setCurrentHealth(100)
    }
    else setCurrentHealth(newhealth)
  }

  return (
    <div className={`bg-cover w-full min-h-screen ${bgWeather}`}>
      <Header />
      <div className="grid grid-cols-2 p-4 place-content-center">
        <GameContext.Provider value={{ currentHealth, healthStatus, arrowDirectionStatus }}>
          <Board />
          <WeatherContext.Provider value={currentloc}>
            <GMap />
            {/* <div><button className="bg-orange-500 text-neutral-700 rounded-lg w-36 h-auto " onClick={handleClick}> CambiarClima</button></div> */}
            <HealthBar />
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


