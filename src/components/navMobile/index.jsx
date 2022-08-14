import './mobile.css'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useStoreContext } from '../../context-api'
import { useNavigate } from 'react-router-dom'

export const Mobile = () => {

  const { state, dispatch } = useStoreContext()
  const navigate = useNavigate()

  const handleOpen = (e) => {
    e.stopPropagation()
    dispatch({ type: 'showBar', payload: !state.isShow })
  }
  return (
        <>
        <section className='transition duration-200 relative bg-white'>
          <div className='bg-black py-4'>
            <h1 className='text-xs text-white text-center'>Welcome To Hijabistahub Online Shop</h1>
          </div>
          <div className='flex justify-between items-center py-4 w-11/12 mx-auto' aria-label='main-nav'>
            <div onClick={(e) => handleOpen(e)} className='flex flex-col gap-1' aria-label='hamburger-nav'>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
            <h1 onClick={()=> navigate('/')} className='tracking-[.40em] text-xl font-normal uppercase'>Hijabista<span className='font-semibold'>hub</span></h1>
            </div>
            <div><HiOutlineShoppingBag className='text-2xl' /></div>
          </div>
        </section>
        </>
  )
}
