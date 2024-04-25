import { useState, useRef } from "react"
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


function App() {
  const [currentloc, setLocation] = useState(PLACES['u']);
  const [bgWeather, setBgWeather] = useState(PLACES['u'].bg);
  const arrowDir = useRef('u')
  const [currentHealth, setCurrentHealth] = useState(60)
  const locID = useRef(0)
  
  const arrowDirectionStatus = function (newGoalDir) {
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
      notify("I am dying!", '💀')
    }
    else if (newhealth > 100) {
      notify("How exciting!", '🥳')
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
            <HealthBar />
            <InfoCard />
          </WeatherContext.Provider>
        </GameContext.Provider>
      </div>
      <Footer />
    </div>
  )
}

export default App


