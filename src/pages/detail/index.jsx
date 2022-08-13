import { Layout } from '../../components/layout'
import { useParams } from 'react-router'
import { useMemo, useState, useEffect  } from 'react'
import axios from 'axios'
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im'
import { HiMinusSm, HiPlusSm } from 'react-icons/hi'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import './detail.css'

const changeAvatar = [
    'https://www.hijabistahub.com/scripts/timthumb.php?src=https://www.hijabistahub.com//site_media/img/0L7A9475_20220329223244.jpg&w=700&zc=1',
    'https://www.hijabistahub.com/scripts/timthumb.php?src=https://www.hijabistahub.com//site_media/img/0L7A9476_20220329223245.jpg&w=700&zc=1',
]

const additionalInformation = [
    {
        id: 'Description',
        msg : ''
    }
]

export default function Detail () {

    const params = useParams()
    const [products, setProduct] = useState([])
    const [count, setCount] = useState(1)
    const [avatarP, setAvatarP] = useState("")


    useEffect(()=> {
        axios.get('/list.json')
          .then(res => {
            setProduct(res.data)
            const avatars = res.data.find(product => product.title === params.productName.split('-').join(' ').toUpperCase())
            setAvatarP(avatars.avatar)
            changeAvatar.unshift(avatars?.avatar)
          })
          .catch(e => console.log(e))
      }, [])

    const detailProduct = useMemo(()=> {
        return products.find(product => product.title === params.productName.split('-').join(' ').toUpperCase() )
    }, [products])

    const handleChangeAvatar = (i) => {
        setAvatarP(prev => changeAvatar[i])
    }

    return (
        <Layout>
            <section className='lg:pt-[180px] bg-white'>
                <div className='w-11/12 mx-auto my-10' aria-label='detail-product-container'>
                    <div className='text-xs text-gray-600' aria-label='page-address-item'>
                        <span>HOME / {params.category.replace('-',' ').toUpperCase() + '  /  ' + params.productName.split('-').join(' ').toUpperCase()} / {params.category.replace('-',' ').toUpperCase() + '  /  ' + params.productName.split('-').join(' ').toUpperCase()}</span>
                    </div>
                    <div className='mt-5 flex flex-col lg:flex-row gap-1 lg:gap-20' aria-label='showcase-product'>
                        <div className='flex flex-col-reverse lg:flex-row justify-center gap-2 lg:gap-7 w-full md:w-8/12 lg:w-[52%] mx-auto' aria-label='avatar'>
                            <div className='flex flex-row lg:flex-col items-center gap-1 lg:gap-3 mx-auto' aria-label='avatar-choosing'>
                              <button className='hidden lg:block'><IoIosArrowUp className='text-2xl'/></button>
                              {
                                changeAvatar.map((avatar, i) => (
                                    <div className='cursor-pointer object-cover h-[65px] lg:h-auto w-[70px] overflow-hidden' onClick={() => handleChangeAvatar(i)} key={i}>
                                        <img src={avatar} alt="avatar-choosing" />
                                    </div>
                                ))
                              }
                               <button className='hidden lg:block'><IoIosArrowDown className='text-2xl'/> </button>
                            </div>
                            <div className='w-full h-[90%]' aria-label='product-avatar'>
                                <img className='w-[100%] object-cover' src={avatarP} alt="product-avatar" />
                                <p className='hidden lg:block text-gray-400 font-light text-sm text-center mt-5'>ENLARGE PHOTO +</p>
                            </div>
                        </div>
                        <div className='w-11/12 md:w-10/12 mt-8 md:mt-0 lg:w-auto mx-auto' aria-label='product-information'>
                            <h1 className='font-semibold text-2xl'>{detailProduct?.title}</h1>
                            <p className='font-semibold mt-4 '>RM {detailProduct?.price}</p>
                            <div className='mt-6 lg:mt-10' aria-label='select-size'>
                                <h1 className='font-semibold text-sm mt-4 mb-1'>Select Kid's Size :</h1>
                                <div className='flex gap-1 text-[.65rem]'>
                                    {
                                        detailProduct?.size.map((s, i) => (
                                            <div key={i} className="flex flex-col justify-center items-center border-[1px] border-gray-400 text-black hover:text-white hover:bg-black rounded-md p-[.6rem] " aria-label='size'>
                                                <p>{s}</p>
                                                <p>years</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='text-[.8rem] mt-2 font-semibold text-gray-600 hover:text-gray-800 cursor-pointer flex items-center gap-2' arial-label='btn-trigger-size'>
                                    <h1>Size Chart</h1>
                                    <span className='flex'>
                                        <ImArrowLeft2 />
                                        <ImArrowRight2 />
                                    </span>
                                </div>
                                <div className='mt-6' aria-label='qty'>
                                    <h1 className='font-bold text-[.8rem] mb-1'>Quantity: </h1>
                                    <div className='flex justify-center items-center text-lg border-[1px] w-max' aria-label='box-qty'>
                                        <button disabled={count <= 1 && true} onClick={()=> setCount(prev => prev - 1)} className='text-xl px-2 py-3 text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition duration-300'><HiMinusSm /></button>
                                        <span className='px-9 text-sm'>{count}</span>
                                        <button onClick={()=> setCount(prev => prev + 1)} className='text-xl px-2 py-3 text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition duration-300'><HiPlusSm /></button>
                                    </div>
                                </div>
                                <div className='mt-2' aria-label='add-to-card'>
                                    <button className='bg-black text-white w-full py-4 font-bold tracking-[.14rem] mt-2 text-xs hover:opacity-40 transition duration-300'>ADD TO CART</button>
                                    <p className='text-sm underline text-center mt-2'>Add to Wishlist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-11/12 lg:w-6/12 mx-auto justify-center items-center my-20 boder-b-[1px] ' aria-label='information-adding'>
                        <nav className='border-b-[2px] text-sm flex'>
                            <a className='activeNav' href="#description">
                                Description
                            </a>
                            <a href="#size-chart">
                                Size Chart
                            </a>
                            <a href="#size-guide">
                                Size Guide
                            </a>
                            <a href="#shipping-details">
                                Shipping Details
                            </a>
                        </nav>
                        <div className='mt-6 '>
                            <ul className='list-disc text-gray-400 text-[.85rem] leading-6'>
                                <li>Kurung Modern Pattern</li>
                                <li>2 Layer hand pattern, lace inside and chiffon puff on outside.</li>
                                <li>Material lace with lining </li>
                                <li>Zip : Back ,wrist and skirt (half rubber skirt)</li>
                                <li>Due to lighting effects, monitor’s brightness, contrast setting, etc, they could be some slight differences in <br /> the colour tone of the pictures and the actual item.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}