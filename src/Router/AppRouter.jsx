import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./Layout"
import { Home, About, Pokemon } from '../mainApp'

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter basename="/Proyecto-TecMD">
        <Routes>
          <Route path="/Proyecto-TecMD" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/Proyecto-TecMD/about" element={<About />} />
            <Route path="/Proyecto-TecMD/pokemon" element={<Pokemon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
