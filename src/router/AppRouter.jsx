import { Route, Routes } from "react-router"
import { LoginPages } from "../auth"
import { HeroesRoutes } from "../heroes"

export const AppRouter = () => {
  return (
    <>

    <Routes>
       
        
        <Route path="login" element={<LoginPages/>}/>
        <Route path="/*" element={<HeroesRoutes/>}/>
        
        
        

    </Routes>
    </>
  )
}
