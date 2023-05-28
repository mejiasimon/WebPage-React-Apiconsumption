import { Route, Routes } from "react-router-dom"
import { HOME } from "../HOME/HOME"
import { Members } from "../Members/Members"
import { Menu } from "../shared/Menu/Menu"
import { Albums } from "../Albums/Albums"
import { Store } from "../Store/Store"
import { Loading } from "../shared/Loading/Loading"
export function Rutas(){
    return(
      <>
<Menu/>
        <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/tienda" element={<Store/>} />
        <Route path="/albums" element={<Albums/>} />
        <Route path="/members" element={<Members />} />
        <Route path="/LOADING" element={<Loading />} />
      </Routes>
      
      </>
      
    
    )
}
 