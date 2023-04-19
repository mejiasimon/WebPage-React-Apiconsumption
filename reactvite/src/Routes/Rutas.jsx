import { Route, Routes } from "react-router-dom"
import { HOME } from "../HOME/HOME"
import { Members } from "../Members/Members"
import { Menu } from "../shared/Menu/Menu"
export function Rutas(){
    return(
      <>
<Menu/>
        <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/members" element={<Members />} />
      </Routes>
      
      </>
      
    
    )
}
 