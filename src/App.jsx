import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import List from './pages/list'
import Detail from './pages/detail'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/:category' element={<List />} />
         <Route path='/:category/:productName' element={<Detail />} />
      </Routes>
    </BrowserRouter>

  )
}
