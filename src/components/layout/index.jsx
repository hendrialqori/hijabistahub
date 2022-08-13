import { Desktop } from '../navDesktop'
import { Mobile } from '../navMobile'
import { Footer } from '../footer'
import { useStoreContext } from '../../context-api'
import { IoIosArrowForward } from 'react-icons/io'
import { RiFacebookFill } from 'react-icons/ri'
import { AiOutlineInstagram } from 'react-icons/ai'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const navTitle = [
  'KURUNG COLLECTION', 'MEN COLLECTION', 'ABAYA SERIES', 'BRIDE SERIES',
  'DRESS & CASUAL WEAR', 'HEADSCARF', 'NVDISMS BEAUTY', 'AS IS ITEM'
]

export const Layout = ({ children }) => {
  const { state : { isShow }, dispatch } = useStoreContext()
  const navigate = useNavigate()

  const resizeFunc = useCallback((e)=> {
    window.location.reload()
  },[])

  useEffect(()=> {
    window.addEventListener('resize', resizeFunc)
  }, [resizeFunc])


  return (
    <>
      <section className='fixed  left-0 z-[-10] overflow-auto bg-black text-white text-xs' aria-label='fixed-nav'>
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
              <p>LOGIN</p> |
              <p>REGISTER</p>
            </div>
        </div>
        <div className='bg-white text-black p-4 text-[.7rem] tracking-[.08rem]' aria-label='main-nav'>
          {
            navTitle.map((nav, i) => (
              <div 
                key={i}
                className="py-4 border-b-[1px] flex items-center justify-between w-[315px]"
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
          // onClick={()=> dispatch({ type:"showBar", payload: false })}
          style={{ transform: isShow && window.innerWidth <= 1336 && 'translateX(350px)' }}
          className={`font-Jost flex flex-col justify-between shadow-2xl transition-all duration-500 `}
        >
          { window.innerWidth >= 1336 ? <Desktop /> : <Mobile /> }
          { children }
        <Footer />
      </main> 
    </>

  )
}
