import { RiFacebookFill } from 'react-icons/ri'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useNavigate, Link } from 'react-router-dom'
import { useRef, useEffect, useCallback, useLayoutEffect } from 'react'
import './desktop.css'


export const Desktop = () => {

  const subHeadRef = useRef(null)
  const navigate = useNavigate()


  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      subHeadRef.current?.classList.add('hidden')
    }
    else{
      subHeadRef.current?.classList.remove('hidden')
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [handleScroll])

  useLayoutEffect(()=> {
    const navItem = document.querySelectorAll("[aria-label='nav-item']")
    navItem.forEach(e => {
      e.addEventListener('mouseenter', e => {
        const subNavLink = e.target.children[0]
        const subNavItem =  e.target.children[1]

        subNavLink.classList.add('border-b-4')
        subNavItem.classList.remove('sub__hidden')
      })

      e.addEventListener('mouseleave', e => {
        const subNavLink = e.target.children[0]
        const subNavItem =  e.target.children[1]

        subNavLink.classList.remove('border-b-4')
        subNavItem.classList.add('sub__hidden')
      })
    })
  }, [])

  const toCategory = (nav) => {
    navigate('/' + nav.toLowerCase().split(' ').join('-') + '?page=1')
  }

  return (
    <header className="bg-black fixed left-0 right-0 z-[200]">
        <section ref={subHeadRef} className="w-[94%] mx-auto py-[.9rem] text-white" aria-label="header-sub-container">
          <div className="flex justify-between text-xs" aria-label="sub-nav">
              <select className="bg-black text-white pr-2" name="" id="">
                <option className="bg-white text-black" value="">MYR</option>
                <option className="bg-white text-black" value="">SGD</option>
                <option className="bg-white text-black" value="">BND</option>
              </select>
              <div className="translate-x-10">
                <h1 className="font-normal text-">Welcome to Hijabistahub Online Shop</h1>
              </div>
              <div className="flex gap-4">
                <button>Dropship login</button> /
                <button>Register</button>
              </div>
          </div>
        </section>
        <section className="bg-white py-4" aria-label="header-title-wrapper">
          <div className="w-[93%] mx-auto flex justify-between items-center" aria-label="main-header-container">
            <div className='flex gap-2 text-2xl' aria-label='socmed-icon'>
              <RiFacebookFill className='text-[1.6rem]' />
              <AiOutlineInstagram />
            </div>
            <div className='uppercase translate-x-[3.2rem]' aria-label='title '>
              <h1 onClick={()=> navigate('/')} className='cursor-pointer tracking-[.45em] text-2xl font-normal'>Hijabista<span className='font-semibold'>hub</span></h1>
            </div>
            <div className='text-black flex gap-8' aria-label='activity-icon'>
              <div className='text-xs flex flex-col items-center'>
                <BiSearch className='text-2xl mb-1' />
                Search
              </div>
              <div className='text-xs flex flex-col items-center'>
                <BsPerson className='text-2xl mb-1' />
                Sign in
              </div>
              <div className='text-xs flex flex-col items-center'>
                <HiOutlineShoppingBag className='text-2xl mb-1' />
                Bag
              </div>
            </div>
          </div>
        </section>
       <section className='bg-white'aria-label='nav-wrapper'>
          <nav className='text-black text-[.82rem] font-semibold mx-auto w-max py-4 tracking-[.02rem]'>
            <ul className='flex gap-6 ' aria-label='nav-item-wrapper'>
              <li aria-label='nav-item'>
                <Link className='relative z-[20] pb-3 border-black transition-all duration-100' to={'/kurung-collection?page=1'}>
                  KURUNG COLLECTION
                </Link>
                <div  className={`${'sub__nav sub__hidden'} pt-12 absolute shadow-md pb-7  left-0 right-0 grid place-items-center`} aria-label='sub-nav-wrapper'>
                  <ul className='flex gap-16' aria-label='sub-nav-container'>
                  <li>
                      <h1>WAWA ZAINAL X HIJABISTAHUB</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                    <li>
                      <h1>ADIRA SALAHUDI X HIJABISTAHUB</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                    <li>
                      <h1>HIJAB COLLECTION</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li aria-label='nav-item'>
                <Link className='relative z-[20] pb-3 border-black transition-all duration-100' to={'/kurung-collection?page=1'}>
                  MEN COLLECTION
                </Link>
                <div className={`${'sub__nav sub__hidden'} pt-12 absolute shadow-md pb-7 left-0 right-0 grid place-items-center`} aria-label='sub-nav-wrapper'>
                  <ul className='grid gap-2' aria-label='sub-nav-container'>        
                    <li>ADAM KURTA FOR KIDS</li>
                    <li>AERIL ZAFREL BAJU MELAYU</li>
                    <li>AERIL ZAFREL FOR KIDS</li>
                    <li>IDRIS KURTA</li>
                    <li>IDRIS KURTA FOR KIDS</li>
                    <li>QAISER BAJU MELAYU</li>
                    <li>ADAM KURTA</li>
                  </ul>
                </div>
              </li>
              <li aria-label='nav-item'>
                <Link className='relative z-[20] pb-3 border-black transition-all duration-100' to={'/kurung-collection?page=1'}>
                  ABAYA SERIES
                </Link>
                <div className={`${'sub__nav sub__hidden'} pt-12 absolute shadow-md pb-7 left-0 right-0 grid place-items-center`} aria-label='sub-nav-wrapper'>
                  <ul className='flex gap-16' aria-label='sub-nav-container'>
                    <li>
                      <h1>INAIRA SERIES</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                    <li>
                      <h1>FAITH SERIES</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li aria-label='nav-item'>
                <Link className='relative z-[20] pb-3 border-black transition-all duration-100' to={'/kurung-collection?page=1'}>
                  BRIDE SERIES
                </Link>
                <div className={`${'sub__nav sub__hidden'} pt-12 absolute shadow-md pb-7 left-0 right-0 grid place-items-center`} aria-label='sub-nav-wrapper'>
                  <ul className='flex gap-6' aria-label='sub-nav-container'>
                    <li>
                      <h1>WAWA ZAINAL X HIJABISTAHUB</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                    <li>
                      <h1>ADIRA SALAHUDI X HIJABISTAHUB</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                    <li>
                      <h1>HIJAB COLLECTION</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                    <li>
                      <h1>WAWA ZAINAL X HIJABISTAHUB</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                  </ul>
                </div>
              </li>
               <li aria-label='nav-item'>
                <Link className='relative z-[20] pb-3 border-black transition-all duration-100' to={'/kurung-collection?page=1'}>
                  DRESS &amp; CASUAL WEAR
                </Link>
                <div className={`${'sub__nav sub__hidden'} pt-12 absolute shadow-md pb-7 left-0 right-0 grid place-items-center`} aria-label='sub-nav-wrapper'>
                  <ul className='flex gap-6' aria-label='sub-nav-container'>
                    <li>
                      <h1>WAWA ZAINAL X HIJABISTAHUB</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                    <li>
                      <h1>ADIRA SALAHUDI X HIJABISTAHUB</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li aria-label='nav-item'>
                <Link className='relative z-[20] pb-3 border-black transition-all duration-100' to={'/kurung-collection?page=1'}>
                  HEADSCARF
                </Link>
                <div className={`${'sub__nav sub__hidden'} pt-12 absolute shadow-md pb-7 left-0 right-0 grid place-items-center`} aria-label='sub-nav-wrapper'>
                  <ul className='flex gap-16' aria-label='sub-nav-container'>
                    <li>
                      <h1>INAIRA SERIES</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                    <li>
                      <h1>FAITH SERIES</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li aria-label='nav-item'>
                <Link className='relative z-[20] pb-3 border-black transition-all duration-100' to={'/kurung-collection?page=1'}>
                  NVDISMS BEAUTY
                </Link>
                <div className={`${'sub__nav sub__hidden'} pt-12 absolute shadow-md pb-7 left-0 right-0 grid place-items-center`} aria-label='sub-nav-wrapper'>
                  <ul className='flex gap-16' aria-label='sub-nav-container'>
                  <li>
                      <h1>WAWA ZAINAL X HIJABISTAHUB</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                    <li>
                      <h1>ADIRA SALAHUDI X HIJABISTAHUB</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                    <li>
                      <h1>HIJAB COLLECTION</h1>
                        <div className='font-light mt-3 grid gap-1' aria-label='sub-nav-item-wrapper'>
                            <p>CLASSIC EMBROIDERY KURUNG</p>
                            <p>DRAPE KURUNG PATTERN</p>
                            <p>MODERN KURUNG</p>
                        </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li aria-label='nav-item'>
                <Link className='relative z-[20] pb-3 border-black transition-all duration-100' to={'/kurung-collection?page=1'}>
                  NVDISMS BEAUTY
                </Link>
                <div className={`${'sub__nav sub__hidden'} pt-12 absolute shadow-md pb-7 left-0 right-0 grid place-items-center`} aria-label='sub-nav-wrapper'>
                  <ul className='flex gap-16' aria-label='sub-nav-container'>
                  <li>
                      <h1>OFF SEASON COLLECTION</h1>
                  </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
       </section>
    </header>
  )
}
