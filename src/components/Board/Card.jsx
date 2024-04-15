export function Card(args) {
    if (args.reverse) {
        return (
            <div> Carta-Reverso</div>
        )
    }
    return (
        <div> Carta-Frente</div>
    )
}