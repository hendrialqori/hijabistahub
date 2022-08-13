import { RiFacebookFill } from 'react-icons/ri'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect, useCallback } from 'react'

const navTitle = [
  'KURUNG COLLECTION', 'MEN COLLECTION', 'ABAYA SERIES', 'BRIDE SERIES',
  'DRESS CASUAL WEAR', 'HEADSCARF', 'NVDISMS BEAUTY', 'AS IS ITEM'
]

const subNav = [
  {
    name: 'KURUNG COLLECTION',
    sub1: [
      {
        name: 'HIJABSTA COLLECTION',
        sub2: [
          'CLASSIC EMBROIDERY KURUNG',
          'DRAPE KURUNG PATTERN',
          'MODERN KURUNG'
        ]
      },
      {
        name: 'WAWA ZAINAL X HIJABISTAHUB',
        sub2: [
          'DIANNA KURUNG',
          'NASTIYA KURUNG',
          'SAREEMA KEBAYA',
          'WIDURI KURUNG',
          'WAWA ZAINAL FOR KIDS'
        ]
      },
      {
        name: 'ADIRA SALAHUDI X HIJABISTAHUB',
        sub2: [
          'ALVA KURUNG',
          'DEERA KURUNG',
          'VELISA KURUNG KEDAH'
        ]
      }
    ]
  },
  {
    name: 'MEN COLLECTION',
    sub1: [
      {
        name: 'HIJABSTA COLLECTION',
        sub2: [
          'CLASSIC EMBROIDERY KURUNG',
          'DRAPE KURUNG PATTERN',
          'MODERN KURUNG'
        ]
      },
      {
        name: 'WAWA ZAINAL X HIJABISTAHUB',
        sub2: [
          'DIANNA KURUNG',
          'NASTIYA KURUNG',
          'SAREEMA KEBAYA',
          'WIDURI KURUNG',
          'WAWA ZAINAL FOR KIDS'
        ]
      },
      {
        name: 'ADIRA SALAHUDI X HIJABISTAHUB',
        sub2: [
          'ALVA KURUNG',
          'DEERA KURUNG',
          'VELISA KURUNG KEDAH'
        ]
      }
    ]
  },
  {
    name: 'ABAYA SERIES',
    sub1: [
      {
        name: 'INAYRA SERIES',
        sub2: [
          'ALEENA PLEATED ABAYA',
          'ALEENA PLEATED ABAYA FOR KIDS',
          'ATIFA ABAYA',
          'AULIYA ABAYA',
          'ERYNA ABAYA',
          'HAYAA ABAYA',
          'INAAYA ABAYA',
          'KAIRINA ABAYA',
          'SAFAA ABAYA',
          'SAFAA ABAYA FOR KIDS',
          'WADINA ABAYA'
        ]
      },
      {
        name: 'FAITH SERIES',
        sub2: [
          'AAFIYA ABAYA',
          'AFSHA KHIMAR',
          'AJWA ABAYA',
          'BILQIS ABAYA',
          'MEDINA KHIMAR',
          'RAUDHAH ABAYA',
          'SYIFA ABAYA'
        ]
      }
    ]
  },
  {
    name: 'BRIDE SERIES',
    sub1: [
      {
        name: 'INAYRA SERIES',
        sub2: [
          'ALEENA PLEATED ABAYA',
          'ALEENA PLEATED ABAYA FOR KIDS',
          'ATIFA ABAYA',
          'AULIYA ABAYA',
          'ERYNA ABAYA',
          'HAYAA ABAYA',
          'INAAYA ABAYA',
          'KAIRINA ABAYA',
          'SAFAA ABAYA',
          'SAFAA ABAYA FOR KIDS',
          'WADINA ABAYA'
        ]
      },
      {
        name: 'FAITH SERIES',
        sub2: [
          'AAFIYA ABAYA',
          'AFSHA KHIMAR',
          'AJWA ABAYA',
          'BILQIS ABAYA',
          'MEDINA KHIMAR',
          'RAUDHAH ABAYA',
          'SYIFA ABAYA'
        ]
      }
    ]
  },
  {
    name: 'HEADSCARF',
    sub1: [
      {
        name: 'INAYRA SERIES',
        sub2: [
          'ALEENA PLEATED ABAYA',
          'ALEENA PLEATED ABAYA FOR KIDS',
          'ATIFA ABAYA',
          'AULIYA ABAYA',
          'ERYNA ABAYA',
          'HAYAA ABAYA',
          'INAAYA ABAYA',
          'KAIRINA ABAYA',
          'SAFAA ABAYA',
          'SAFAA ABAYA FOR KIDS',
          'WADINA ABAYA'
        ]
      },
      {
        name: 'FAITH SERIES',
        sub2: [
          'AAFIYA ABAYA',
          'AFSHA KHIMAR',
          'AJWA ABAYA',
          'BILQIS ABAYA',
          'MEDINA KHIMAR',
          'RAUDHAH ABAYA',
          'SYIFA ABAYA'
        ]
      }
    ]
  },
  {
    name: 'NVDISMS BEAUTY',
    sub1: [
      {
        name: 'INAYRA SERIES',
        sub2: [
          'ALEENA PLEATED ABAYA',
          'ALEENA PLEATED ABAYA FOR KIDS',
          'ATIFA ABAYA',
          'AULIYA ABAYA',
          'ERYNA ABAYA',
          'HAYAA ABAYA',
          'INAAYA ABAYA',
          'KAIRINA ABAYA',
          'SAFAA ABAYA',
          'SAFAA ABAYA FOR KIDS',
          'WADINA ABAYA'
        ]
      },
      {
        name: 'FAITH SERIES',
        sub2: [
          'AAFIYA ABAYA',
          'AFSHA KHIMAR',
          'AJWA ABAYA',
          'BILQIS ABAYA',
          'MEDINA KHIMAR',
          'RAUDHAH ABAYA',
          'SYIFA ABAYA'
        ]
      }
    ]
  },
  {
    name: 'DRESS CASUAL WEAR',
    sub1: [
      {
        name: 'INAYRA SERIES',
        sub2: [
          'ALEENA PLEATED ABAYA',
          'ALEENA PLEATED ABAYA FOR KIDS',
          'ATIFA ABAYA',
          'AULIYA ABAYA',
          'ERYNA ABAYA',
          'HAYAA ABAYA',
          'INAAYA ABAYA',
          'KAIRINA ABAYA',
          'SAFAA ABAYA',
          'SAFAA ABAYA FOR KIDS',
          'WADINA ABAYA'
        ]
      },
      {
        name: 'FAITH SERIES',
        sub2: [
          'AAFIYA ABAYA',
          'AFSHA KHIMAR',
          'AJWA ABAYA',
          'BILQIS ABAYA',
          'MEDINA KHIMAR',
          'RAUDHAH ABAYA',
          'SYIFA ABAYA'
        ]
      }
    ]
  }
]

export const Desktop = () => {

  const [show, setShow] = useState(false)
  const [title, setTitle] = useState('')
  const subHeadRef = useRef(null)
  const navigate = useNavigate()
  const [subN, setSubNav] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      subHeadRef.current.classList.add('hidden')
      setSubNav(true)
    }
    else{
      subHeadRef.current.classList.remove('hidden')
      setSubNav(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [handleScroll])

  const toCategory = (nav) => {
    navigate('/' + nav.toLowerCase().split(' ').join('-') + '?page=1')
    window.location.reload()
  }
  return (
    <header className="bg-black fixed left-0 right-0 z-[200]">
        <div ref={subHeadRef} className="w-[94%] mx-auto py-[.9rem] text-white" aria-label="header-sub-container">
          <section className="flex justify-between text-xs" aria-label="sub-nav">
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
          </section>
        </div>
        <div className="bg-white py-4" aria-label="header-title-wrapper">
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
        </div>
       <div 
          className='bg-white'
          aria-label='nav-wrapper'
          >
            <nav className='text-black flex gap-6 text-[.82rem] font-semibold mx-auto w-max pt-4 tracking-[.02rem]'>
              {
                navTitle.map((nav, i) => (
                  <div key={i}>
                    <div
                      onMouseOver={(e) => {
                        setShow(true)
                        setTitle(e.target.innerHTML)
                      }}
                      onMouseLeave={() => setShow(false)}
                      className='hover:border-b-4 border-b-black h-[30px] transition-all duration-50 cursor-pointer'
                      onClick={() => toCategory(nav)} >
                      <h1>{nav}</h1>
                    </div>
                    <div className={`${!show && 'hidden'} ${ subN ? 'top-[121px]' : 'top-[180px]' } absolute bg-white  py-14 left-0 right-0 `}>
                      {
                        subNav.filter(sub => sub.name === title).map((data, i) => (
                          <div key={i} className='flex gap-5 w-max mx-auto'>
                                {
                                  data.sub1.map((sub, i) => (
                                    <div key={i} className='font-light'>
                                      <h2 className='font-semibold mb-3'>{sub.name}</h2>
                                        <ul>
                                          {
                                            sub.sub2.map((sub2, i) => (
                                              <li key={i}>{sub2}</li>
                                            ))
                                          }
                                        </ul>
                                    </div>
                                  ))
                                }
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </nav>
       </div>
    </header>
  )
}
