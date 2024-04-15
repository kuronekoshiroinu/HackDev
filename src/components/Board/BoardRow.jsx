import { Card } from "./Card";

export function BoardRow() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <Card />
            <Card />
            <Card />
        </div>
    )
}