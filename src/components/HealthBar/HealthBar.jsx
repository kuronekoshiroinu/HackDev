import { useState, useContext, useEffect } from "react"
import { GameContext } from "../Body/BodyContext"
import { Toaster } from "react-hot-toast"

export function HealthBar() {
    const gamecontext = useContext(GameContext)
    const [health, setHealth] = useState(20)
    useEffect(() => {
        setHealth(gamecontext.currentHealth)
    }, [gamecontext])

    function getHealthColor() {
        if (health < 25) return '#B03A2E'
        else if (health < 50) return '#CA6F1E'
        else if (health < 75) return '#F1C40F'
        else return '#27AE60'
    }

    return (
        <div className="h-8 w-3/4 bg-gray-300 rounded-full ">
            <div
                className="transition:width duration-150 ease-linear h-full rounded-full"
                style={{ "width": `${health}%`, "backgroundColor": getHealthColor() }}
            ></div>
            <div className="bg-slate-900 text-cyan-50 w-1/3 rounded-md text-center">Health</div>
            <Toaster containerStyle={{ position: 'relative' }} />
        </div>
    )
}