export function InfoCard(args) {
    return (
        <div className="rounded-md shadow-md flex flex-row w-96 right-5">
            <img
                src={args.location.imgurl}
                width={100}
                height={100}
            />
            <div>
                <div className="bg-slate-300"> {args.location.title}</div>
                <div> {args.location.climate}</div>
                <div> {args.location.info}</div>
            </div>
        </div>
    )
}