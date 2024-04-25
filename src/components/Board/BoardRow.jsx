export function BoardRow({children}) {
    return (
        <div className="grid grid-cols-3 align-baseline p-3">
            {
                children
            }
        </div>
    )
}