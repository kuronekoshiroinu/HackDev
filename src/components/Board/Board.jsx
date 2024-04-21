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
    const MAXFLIPS = 2

    function comparingCards(previous, current) {
        if (current === 0) {
            if (cartasvisibles.current > 0) cartasvisibles.current = cartasvisibles.current - 1
        }
        else {
            cartasvisibles.current = cartasvisibles.current + 1
        }

        console.log("previous " + previous + " current " + current)
        console.log("Cartas visibles " + cartasvisibles.current)
        setCardPressed(current)

        if (previous === 0 && current === 0) return

        // restart flipping cards and shuffling them 
        if (previous === current) {
            cartasvisibles.current = 0
            setCardPressed(0)
            setTimeout(() => {
                setOrientations(shufflingCards(Object.keys(orientations)))
                setNtries(ntries + 1)
            }, 600)
        }

        // restart flipping cards
        if (cartasvisibles.current > MAXFLIPS - 1) {
            cartasvisibles.current = 0
            setCardPressed(0)
            setTimeout(() => {
                setNtries(ntries + 1)
            }, 600)
        }
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
                                onClick={(currentdir) => {
                                    comparingCards(cardPressed, currentdir)
                                }}>
                            </Card>
                        )
                    }
                </BoardRow>
            </CardContext.Provider>
        </BoardContext.Provider>
    )
} 