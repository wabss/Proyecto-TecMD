import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./Layout"
import { Home, About, Pokemon } from '../mainApp'

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pokemon" element={<Pokemon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
