import { Desc } from "./description"
import { Size } from "./size";
import { Guide } from "./guide";
import { Shipping } from "./shipping";
import './subnav.css'
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Subnav = () => {
  let component;
  const hash = window.location.hash

    // For display content navigate
  switch(hash) {
    case '#desc':
      component = <Desc />
      break
    case '#size-chart':
      component = <Size />
      break
    case '#size-guide':
      component = <Guide />
      break
    case '#shipping-details':
      component = <Shipping />
      break
    default:
      component = <Desc />
  } 

  useEffect(()=> {
    
  }, [])

    // Logic for active navigation
  const handleActive = e => {
    const href = '#' + e?.getAttribute('href').split('#')[1]
    if(href === hash) {
        e?.classList?.add('activeNav')
    }else{
        e?.classList?.remove('activeNav')
    }
  }


  return (
    <div className='flex flex-col w-11/12 lg:w-6/12 mx-auto justify-center items-center my-20 boder-b-[1px] ' aria-label='sub-nav-information'>
        <nav className='border-b-[2px] text-sm flex'>
            <Link className="activeNav" to="#desc" ref={e => handleActive(e)}>
                Description
            </Link>
            <Link to="#size-chart" ref={e => handleActive(e)}>
                Size Chart
            </Link>
            <Link to="#size-guide" ref={e => handleActive(e)}>
                Size Guide
            </Link>
            <Link to="#shipping-details" ref={e => handleActive(e)}>
                Shipping Details
            </Link>
        </nav>
        <div className='mt-6 '>
            { component }
        </div>
    </div>
    )
}

// export default React.memo(Subnav, (prevProps, nextProps) => {
//   return true
//   // return prevProps !== nextProps
// })