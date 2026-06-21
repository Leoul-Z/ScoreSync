import './css/App.css'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Home from './pages/Home'
import Fixtures from './pages/Fixtures'
import { Routes,Route } from 'react-router-dom'
import News from './pages/News'
import Live from './pages/Live'
import Login from './pages/Login'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/fixtures' element={<Fixtures/>} />
        <Route path='/live' element={<Live/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>


    <Footer/>
    </>
  )
}

export default App
