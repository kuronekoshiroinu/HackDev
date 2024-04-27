function Header() {
    return (
        <div className="text-4xl bg-cyan-950 text-center text-white font-bold font-serif">Trip Survivor</div>
    )
}

function Footer() {
    return (
        <div className="w-full h-16 fixed bottom-0 text-2xl bg-cyan-950 text-center text-white ">
            Contacts
            <div className="flex flex-row justify-between px-52 ">
                <div>
                    <svg className="h-8 w-8 text-slate-200 hover:text-orange-400" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                </div>
                <div>
                    <a href="https://github.com/kuronekoshiroinu?tab=repositories">
                        <svg className="h-8 w-8 text-slate-200 hover:text-orange-400 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg> </a>
                </div>
                <div>
                    <svg className="h-8 w-8 text-slate-200 hover:text-orange-400" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2 " /></svg>
                </div>
            </div>
        </div>
    )
}

export { Header, Footer }