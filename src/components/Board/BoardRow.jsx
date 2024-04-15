import { Card } from "./Card";

export function BoardRow() {
    const cardPos = true
    return (
        <div className="grid grid-cols-3 gap-4">
            <Card reverse={cardPos} />
            <Card reverse={cardPos} />
            <Card reverse={cardPos} />
        </div>
    )
}