
import { useContext } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
// import { AuthContext } from './contexts/AuthProvider'
// import Navbar from './pages/shared/Navbar'
import FooterMain from './pages/shared/FooterMain'
import Newnaav from './pages/Home/Newnaav'

function App() {

  // const {user} = useContext(AuthContext)
  return (
    <>
      {/* <Navbar/> */}
      <Newnaav/>
      <div className='min-h-screen'>
      <Outlet/>
      </div>
      <FooterMain/>
    </>
  )
}

export default App
