import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Home = lazy(()=> import('./pages/home'))
const List = lazy(()=> import('./pages/list'))
const Detail = lazy(()=> import('./pages/detail'))
const Login = lazy(()=> import('./pages/login'))

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Suspense fallback={false}><Home /></Suspense>} />
         <Route path='/:category' element={<Suspense fallback={false}><List /></Suspense>} />
         <Route path='/:category/:productName' element={<Suspense fallback={false}><Detail /></Suspense>} />
         <Route path='/login' element={<Suspense fallback={false}><Login /></Suspense>} />
      </Routes>
    </BrowserRouter>

  )
}
