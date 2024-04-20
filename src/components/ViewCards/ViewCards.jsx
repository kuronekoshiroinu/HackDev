import { InfoCard } from "../InfoCard/InfoCard"
import { useState } from 'react';


export function ViewCards() {
    const [enable, setEnable] = useState(false);
    const onClick= function(){
        enable? setEnable(false): setEnable(true)
    }

    const firstLoc = {
        imgurl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Brazil_location_map.svg",
        title: "Brasil",
        clime: "zona tropical",
        info: "Río de Janeiro, Brasil (22.9068° S, 43.1729° W)"
    }
    const secondLoc = {
        imgurl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Alaska.svg",
        title: "Alaska",
        clime: "zona ártica",
        info: "Barrow, Alaska, EE. UU. (71.2906° N, 156.7886° W) "
    }

    // const climates = {
    //     tropical: "tropical",
    //     desertico: "desertico",
    //     templado: "templado",
    //     artico: "artico",
    //     subtropical: "subtropcal",
    //     mediterraneo: "mediterr",
    //     subartico: "subartico",
    //     ecuatorial: "ecuatorial"
    // }

    return (
        <div>
            <button className="bg-orange-500 text-neutral-700 rounded-lg w-36 h-auto " onClick={onClick}>ShowInfoCards</button>
            <br/>
            {enable &&
                <div >
                    <InfoCard location={firstLoc} />
                    <InfoCard location={secondLoc} />
                </div>
            }
            <br/>
        </div>
    )
}