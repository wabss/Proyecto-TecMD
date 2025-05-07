import { Navbar } from '../components/Navbar.jsx'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </>
  )
}
