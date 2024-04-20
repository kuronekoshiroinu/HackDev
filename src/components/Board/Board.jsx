import { useRef, useState } from "react";
import { BoardRow } from "./BoardRow"
import { Card } from "./Card";
import { BoardContext, CardContext } from "./BoardContext";

const cardDirection = [
    { direction: 'l' }, //left
    { direction: 'r' }, //right
    { direction: 'u' }, //up
    { direction: 'd' }  //down
]

function shufflingCards(keys) {
    let cards_data = {}
    keys.forEach((item) =>
        cards_data[item] = { direction: cardDirection[Math.floor(Math.random() * 4)].direction }
    )
    return cards_data
}

export function Board() {
    const [cardPressed, setCardPressed] = useState(0)
    const [ntries, setNtries] = useState(0)
    const cartasvisibles = useRef(0)
    const [orientations, setOrientations] = useState(
        // hardcoded card keys and orientations
        {
            1: { direction: 'l' },
            2: { direction: 'l' },
            3: { direction: 'u' },
            4: { direction: 'd' },
            5: { direction: 'r' },
            6: { direction: 'r' },
        }
    )

    function cardsState(previous, current) {
        if (previous === 0 && current === 0) return

        if (previous === current) {
            console.log("previous " + previous + " current " + current)
            setCardPressed(0)
            setTimeout(() => {
                setOrientations(shufflingCards(Object.keys(orientations)))
                setNtries(ntries + 1)
            }, 1000)
            cartasvisibles.current = 0
        }

        else {
            if (cartasvisibles.current > 1) {
                setTimeout(() => {
                    setNtries(ntries + 1)
                }, 1000)
                cartasvisibles.current = 0
            }
            console.log("previous " + previous + " current " + current)
            setCardPressed(current)
        }
        cartasvisibles.current = cartasvisibles.current + 1
    }

    return (
        <BoardContext.Provider value={orientations}>
            <CardContext.Provider value={ntries}>
                <BoardRow>
                    {
                        Object.keys(orientations).map(
                            (value) => <Card
                                key={value}
                                id={value}
                                onClick={(direction) => {
                                    cardsState(cardPressed, direction)
                                }}>
                            </Card>
                        )
                    }
                </BoardRow>
            </CardContext.Provider>
        </BoardContext.Provider>
    )
} 