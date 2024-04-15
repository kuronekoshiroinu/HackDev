import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import 'tailwindcss/tailwind.css'
import { GMap } from "./components/Maps/GMap"
import { Board } from "./components/Board/Board"
import { Header, Footer } from "./components/Body/Body"
import { ViewCards } from "./components/ViewCards/ViewCards"
function App() {
  const position = { lat: 53.24, lng: 10 };
  return (
    <div className=" container mx-auto">
      <Header />
      <div className="grid grid-cols-2 gap-4 justify-center place-content-center ">
        <Board />
        <GMap />
        <ViewCards/>
      </div>
      <Footer />
    </div>
    // <BrowserRouter>   
    // <Routes>
    //   <Route path="/" element={<Navigate to ="/home"/>} />
    //   <Route path="/home" element={<Pag1/>}/>
    //   <Route path="/algo1" element={<pag2/>}/>
    //   <Route path="/algo2" element={<pag3/>}/>
    // </Routes>
    // </BrowserRouter>  
  )
}

export default App


