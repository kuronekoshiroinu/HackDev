export function BoardRow({children}) {
    // cardBuilder se ejecuta para cada BoardRow
    return (
        <div className="grid grid-cols-3 align-baseline p-3">
            {
                children
            }
        </div>
    )
}