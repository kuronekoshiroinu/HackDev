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
        <div className="rounded-md shadow-md flex flex-row w-96 right-5">
            <img
                src={info.imgurl}
                width={100}
                height={100}
            />
            <div>
                <div className="bg-slate-300"> {info.title}</div>
                <div> {info.clime}</div>
                <div> {info.descr}</div>
            </div>
        </div>
    )
}