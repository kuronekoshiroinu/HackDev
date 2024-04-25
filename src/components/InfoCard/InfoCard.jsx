import { useState, useEffect, useContext } from "react"
import { WeatherContext } from "../Body/BodyContext"

export function InfoCard() {
    const weather = useContext(WeatherContext)
    const [info, setInfo] = useState(weather)
    useEffect(() => {
        console.log("INFOCARD: changing place")
        setInfo(weather)
    }, [weather]);

    return (
        <div className="rounded-md shadow-md flex flex-row min-w-full"> 
            <img
                src={info.imgurl}
                width={250}
                height={250}
            />
            <div>
                <div className="bg-slate-300 "> {info.title}</div>
                <div className="bg-slate-200"> {info.clime}</div>
                <div className="bg-slate-100"> {info.descr}</div>
            </div>
        </div>
    )
}