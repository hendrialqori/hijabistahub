import { Desktop } from '../navDesktop'
import { Mobile } from '../navMobile'
import { Footer } from '../footer'
import { useStoreContext } from '../../context/store'
import { IoIosArrowForward } from 'react-icons/io'
import { RiFacebookFill } from 'react-icons/ri'
import { AiOutlineInstagram } from 'react-icons/ai'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import './layout.css'


const navTitle = [
  'KURUNG COLLECTION', 'MEN COLLECTION', 'ABAYA SERIES', 'BRIDE SERIES',
  'DRESS & CASUAL WEAR', 'HEADSCARF', 'NVDISMS BEAUTY', 'AS IS ITEM'
]

export const Layout = ({ children }) => {
  const { state : { isShow, cartShow }, dispatch } = useStoreContext()
  const navigate = useNavigate()
  const buttonRef = useRef(null)
  const [isMobile, setMobile] = useState(false)

  const resizeFunc = useCallback((e)=> {
    if(window.innerWidth <= 1024 ) setMobile(true)
    else setMobile(false)
  },[isMobile])

  const scrollArrow = useCallback(()=> {
    if(window.scrollY >= 300) buttonRef.current?.classList?.remove('hidden')
    else buttonRef.current?.classList?.add('hidden')
  }, [])

  useEffect(()=> {
    window.addEventListener('resize', resizeFunc)
  }, [resizeFunc, isMobile])

  useEffect(()=> {
    window.addEventListener('scroll', scrollArrow)
  }, [scrollArrow])


  return (
    <div className='relative overflow-hidden' aria-label='main-wrapper-project'>
      <section className={` ${ cartShow ? 'cart__' : 'cart__hidden cart__' } fixed right-0 top-0 h-[100vh] w-[320px] xs:w-[350px] shadow-lg z-[500] bg-white`}>
        <div className='w-[90%] mx-auto flex flex-col h-full' aria-label='cart-container'>
          <header className='border-b-gray-200 border-b-[1px] flex justify-between items-center py-5 px-3'>
            <h1 className='font-bold text-sm tracking-[.7px]'>
              MY SHOPPING BAG
            </h1>
            <button onClick={() => dispatch({ type:'showCart', paylod: false })} className='text-gray-100'>
              <GrClose />
            </button>
          </header>
          <section className='h-[63%] border-b-gray-200 border-b-[1px] ' aria-label='cart-list'>
              <p className='text-[.75rem] text-center mt-10 text-gray-600'>Your shopping cart is empty.</p>
          </section>
          <section className='mt-3' aria-label='cart-action'>
            <div className='text-xs flex justify-between tracking-[.7px]' aria-label='card-amount-label'>
                <div>
                  <h1 className='font-bold mb-1' >TOTAL ITEM</h1>
                  <h2>0</h2>
                </div>
                <div className='text-right'>
                  <h1 className='font-bold mb-1' >SUB TOTAL</h1>
                  <h2>RM 0.00</h2>
                </div>
            </div>
            <div className='mt-3' aria-label='chart-action-button'>
                <button className='w-full text-xs mb-2 text-white bg-black py-4 hover:bg-gray-700'>
                  Checkout Now
                </button>
                <button className='w-full text-xs text-black border-[1px] border-gray-400 py-4  hover:bg-gray-500'>
                  Checkout Now
                </button>
            </div>
          </section>
        </div>
      </section>

      <section style={{ display: window.innerWidth >= 1332 && 'none' }} className='absolute left-0 h-[500px] overflow-auto bg-black text-white text-xs' aria-label='fixed-nav'>
        <div className='p-4'>
          <form className=''>
            <input
              type="search"
              className='outline-none w-7/12 px-3 py-2 text-sm bg-black border-b-[1px] text-white placeholder:text-white placeholder:text-sm'
              placeholder='Search Product'
              />
          </form>
          <div className='flex gap-7 py-6 text-xs' aria-label='dropship-wrapper'>
            <h1>DROPSHIP: </h1>
            <div className='flex gap-3'>
              <p>LOGIN</p> |
              <p>REGISTER</p>
            </div>
          </div>
          <div className='flex gap-3 text-xs' aria-label='user-wrapper'>
              <Link to='/login'>LOGIN</Link> |
              <Link to='/login'>REGISTER</Link>
            </div>
        </div>
        <div onClick={()=> dispatch({ type:"showBar", payload: false })} className='bg-white text-black p-4 text-[.7rem] tracking-[.08rem]' aria-label='main-nav'>
          {
            navTitle.map((nav, i) => (
              <div 
                key={i}
                className="py-4 border-b-[1px] flex items-center justify-between w-[250px]"
                onClick={() => navigate( '/' + nav.toLowerCase().split(' ').join('-') + '?page=1')}
                >
                  {nav}
                  <IoIosArrowForward className='text-black text-xl'/>
              </div>
            ))
          }
        </div>
        <div className='flex justify-between bg-white text-black p-4' aria-label='socmed-logo-dropdown'>
            <div className='flex items-center gap-2'>
              <RiFacebookFill className='text-4xl' />
              <AiOutlineInstagram className='text-3xl'/>
            </div>
            <select className='text-sm font-light pr-3' name="" id="">
              <option value="">MYR</option>
              <option value="">SGD</option>
              <option value="">BND</option>
            </select>
        </div>
      </section>

       <main 
          onClick={()=> dispatch({ type:"showBar", payload: false })}
          style={{ transform: isShow && window.innerWidth <= 1024 && 'translateX(280px)' }}
          className={`relative font-Jost flex flex-col justify-between shadow-2xl transition-all duration-500`}
        > 
          { isMobile || window.innerWidth <= 1024 ? <Mobile /> : <Desktop />  }
          { children } 
           <Footer />
      </main> 

      <button 
        ref={buttonRef} 
        onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className='hidden fixed z-[400] right-8 bottom-20 w-max'
        >
        <img className='w-[35px] opacity-40' src="/go.png" alt="go-to-top" />
      </button>
    </div>

  )
}
