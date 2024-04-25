import { useRef, useState, useContext } from "react";
import { BoardRow } from "./BoardRow";
import { Card } from "./Card";
import { BoardContext, CardContext } from "./BoardContext";
import { GameContext } from "../Body/BodyContext";
import notify from "../../utils/utils";

const CARD_DIRECTION = [
    { direction: 'l' }, //left
    { direction: 'l' }, //left
    { direction: 'r' }, //right
    { direction: 'u' }, //up
    { direction: 'u' }, //up
    { direction: 'd' }  //down
]

function shufflingCards(keys) {
    let cards_data = {}
    keys.forEach((item) =>
        cards_data[item] = { direction: CARD_DIRECTION[Math.floor(Math.random() * CARD_DIRECTION.length)].direction }
    )
    return cards_data
}

export function Board() {
    const gamecontext = useContext(GameContext)
    const [cardPressed, setCardPressed] = useState(0)
    const [ntries, setNtries] = useState(0)
    const cartasvisibles = useRef(0)
    const [orientations, setOrientations] = useState(
        shufflingCards([1, 2, 3, 4, 5, 6, 7, 8, 9])
    )
    const MAXFLIPS = 3
    const flippedCards = useRef([])

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
            gamecontext.arrowDirectionStatus(current)
            if (current === 'u' || current === 'l') gamecontext.healthStatus(5)
            else gamecontext.healthStatus(10)

            // Simple Notifications
            if (current === 'u') notify("Cold place but I can survive +5", '🥶')
            else if (current === 'l') notify("Hot place but I can survive +5", '🥵')
            else notify("I don't want to leave +10", '🥴')
            //----------------------------------

            cartasvisibles.current = 0
            flippedCards.current = []
            setCardPressed(0)
            setTimeout(() => {
                setOrientations(shufflingCards(Object.keys(orientations)))
                setNtries(ntries + 1)
            }, 600)
        }

        // restart flipping cards
        if (cartasvisibles.current > MAXFLIPS - 1) {
            gamecontext.healthStatus(-8)
            // Simple Notifications
            notify("I'm lost, thanks! -8", '🤬')
            //----------------------------------
            cartasvisibles.current = 0
            flippedCards.current = []
            setCardPressed(0)
            setTimeout(() => {
                setNtries(ntries + 1)
            }, 600)
        }
    }

    const addFlippedCards = (cardID) => {
        flippedCards.current.push(cardID)
        console.log(`BOARD: new flipped cardID ${cardID}`)
        console.log(flippedCards.current)
    }

    return (
        <BoardContext.Provider value={{ orientations, flippedCards, addFlippedCards }}>
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