import { Card } from "./Card";

const cardDirection = [
    { direction: 0 },
    { direction: 180 },
    { direction: -90 },
    { direction: 90 }
]

function cardBuilder(ncards) {
    let cardstype = []
    for (let i = 0; i < ncards; i++) {
        cardstype.push({
            key: i,
            direction: cardDirection[Math.floor(Math.random() * 4)].direction
        })
    }
    return cardstype
}

export function BoardRow() {
    // cardBuilder se ejecuta para cada BoardRow
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                cardBuilder(3).map(
                    (cardtype) =>
                        <Card
                            key={cardtype.key}
                            direction={cardtype.direction}
                        />
                )
            }
        </div>
    )
}