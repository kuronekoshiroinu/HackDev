import { useState, useEffect } from "react";
import redarrow from "../../assets/redarrow.svg"
import inter from "../../assets/inter.svg"
import { BoardContext, CardContext } from "./BoardContext";
import { useContext } from "react";

function frontCard(direction) {
    let rotation = '' // default para up-arrow
    if (direction == 'r') rotation = "rotate-90"
    else if (direction == 'd') rotation = "rotate-180"
    else if (direction == 'l') rotation = "-rotate-90"
    let className = `shadow-inner shadow-black h-20 w-20 ${rotation}`

    return (
        <div className={className}>
            <img src={redarrow}></img>
        </div>
    )
}

function reverseCard() {
    return (
        <div className="transition duration-150 shadow-2xl shadow-black h-20 w-20 hover:scale-125">
            <img src={inter}></img>
        </div>
    )
}

export function Card({ id, onClick }) {
    const boardContext = useContext(BoardContext)
    const cardContext = useContext(CardContext)
    const [flipedCard, setFlipedCard] = useState(false);
    const index = id

    useEffect(() => {
        console.log('JIMBO:: New try:', cardContext);
        flipedCard && setFlipedCard(false)
    }, [cardContext]);

    const arrow_direction = boardContext.orientations[index].direction

    const handleClick = function () {
        // FIXING bug, evitando que volteen la misma carta
        if (boardContext.flippedCards.current.includes(index)) return
        !flipedCard && boardContext.addFlippedCards(index)
        //-------------------------------------------------

        setFlipedCard(!flipedCard)
        flipedCard ? onClick(0) : onClick(arrow_direction)
    }

    return (
        <div onClick={handleClick}>
            {
                flipedCard ? frontCard(arrow_direction) : reverseCard()
            }
        </div >
    )
}