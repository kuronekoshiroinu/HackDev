import { useState } from "react";

export function Card() {
    const [reverse, setReverse] = useState(true);
    const onClick = function () {
        reverse ? setReverse(false) : setReverse(true);
    }

    return (
        <div className="hover:shadow-md cursor-alias" onClick={onClick}>
            {
                reverse ? <div> Carta-Reverso</div> : <div> Carta-Frente</div>
            }
        </div>
    )


}