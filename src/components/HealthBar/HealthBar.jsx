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
        if (health < 50) return "red"
        return '#00ff00'
    }

    return (
        <div className="h-8 w-3/4 bg-gray-300 rounded-full">
            <div
                className="transition:width duration-150 ease-linear h-full rounded-full"
                style={{ "width": `${health}%`, "backgroundColor": getHealthColor() }}
            ></div>
            <div className="bg-slate-900 text-cyan-50 w-1/3 rounded-md text-center">Health</div>
            <Toaster containerStyle={{ position: 'relative' }} />
        </div>
    )
}