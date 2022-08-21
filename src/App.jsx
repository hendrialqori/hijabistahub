import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import List from './pages/list'
import Detail from './pages/detail'
import Login from './pages/login'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/:category' element={<List />} />
         <Route path='/:category/:productName' element={<Detail />} />
         <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>

  )
}
