import { useState } from "react";
import redarrow from "../../assets/redarrow.svg"
import inter from "../../assets/inter.svg"

function frontCard(direction) {
    let rotation = ""
    if (direction == 90) rotation="rotate-90"
    else if (direction == 180) rotation="rotate-180"
    else if (direction == -90) rotation="-rotate-90"
    let className = `shadow-md h-20 w-20 ${rotation}`

    return (
        <div className={className}>
            <img src={redarrow}></img>
        </div>
    )
}

function reverseCard() {
    return (
        <div className="shadow-md h-20 w-20 hover:w-24">
            <img src={inter}></img>
        </div>
    )
}

export function Card({direction}) {
    const [reverse, setReverse] = useState(true);
    const onClick = function () {
        reverse ? setReverse(false) : setReverse(true);
    }

    return (
        <div onClick={onClick}>
            {
                reverse ? reverseCard() : frontCard(direction)
            }
        </div >
    )
}