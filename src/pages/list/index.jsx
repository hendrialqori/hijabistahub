import { useState } from 'react'
import { Layout } from '../../components/layout'
import { Item } from '../../components/card'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { useEffect } from 'react'
import axios from 'axios'
import { LazyLoadImage as Image } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import './list.css'

export default function List () {

  const params = useParams()
  const [query] = useSearchParams()
  const navigate = useNavigate()

  const [items, setItems] = useState([])
  const [page, setPage] = useState(0)

  useEffect(()=> {
    setPage(query.get('page'))
  }, [page])

  useEffect(()=> {
    axios.get('/list.json')
      .then(res => setItems(res.data))
      .catch(e => console.log(e))
  }, [])

  const decrementPage = () => {
    if(query.get('page') == 1) return
    navigate(`/${params.category}?page=${page - 1}`)
  }

  const incrementPage = () => {
    if(query.get('page') == 5) return
    navigate(`/${params.category}?page=${parseInt(page) + 1 }`)
  }

  return (
   <Layout>
      <section className='lg:pt-[180px] bg-white' aria-label='list-product-wrapper'>
          <section className='w-11/12 mx-auto mb-5'>
              <div className='py-6 lg:py-5 text-center' aria-label='title-wrapper'>
                  <span className='text-[.65rem]'>HOME / {params.category.replace('-',' ').toUpperCase()}</span>
                  <h1 className='font-bold tracking-[.19rem] text-lg mt-4'>{params.category.replace('-',' ').toUpperCase()}</h1>
              </div>
              <div className='flex flex-col lg:flex-row justify-between items-center gap-5' aria-label='page-choose-container'>
                <div className='py-2 flex items-center gap-5 text-gray-400' aria-label='choosing-wrapper'>
                  <div className='hidden lg:flex items-center gap-2'>
                    <img className='opacity-20 h-[90%]' src="/box2.png" alt="box2" width={24} />
                    <img className='opacity-50' src="/box1.png" alt="box1" width={26} />
                  </div>
                  <div className='text-xs' aria-label='sort-by-wrapper'>
                      <select className='p-2 border-[1px] outline-none border-gray-200' name="" id="">
                        <option value="">Sort By</option>
                        <option value="">Latest</option>
                        <option value="">Oldest</option>
                        <option value="">Lower Price</option>
                        <option value="">Higgest Price</option>
                      </select>
                  </div>
                  <div className='text-xs' aria-label='sort-by-wrapper'>
                      <select className='p-2 w-36 border-[1px] outline-none border-gray-200 ' name="" id="">
                        <option value="">Show</option>
                        <option value="">20 Per Page</option>
                        <option value="">40 Per Page</option>
                        <option value="">60 Per Page</option>
                      </select>
                  </div>
                </div>
                <div className='flex gap-3 items-center' aria-label='pagination-wrapper'>
                  <button onClick={() => decrementPage()}><GoChevronLeft className='text-xs font-bold' /></button>
                  <div className='flex items-center gap-3 text-xs font-light' aria-label='page'>
                    {
                      Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} onClick={() => {
                            navigate(`/${params.category}?page=${ i + 1}`)
                        }} 
                        className={ query.get('page') == i + 1 ? 'activePages pages' : 'pages' }>{i + 1}</div>
                      ))
                    }
                    ...
                  </div>
                  <button onClick={() => incrementPage()}><GoChevronRight className='text-xs font-bold' /></button>
                  <p className='hidden lg:block text-sm text-gray-500'>Showing 20 Products</p>
                </div>
                <p className='lg:hidden block text-sm text-gray-500'>Showing 20 Products</p>
              </div>

          </section>
          <div className='w-11/12 mx-auto flex flex-wrap justify-between gap-3 lg:gap-7' aria-label='list-product-container'>
              {
                items?.map((item, i) => (
                  <Item key={i} {...item} />
                ))
              }
          </div>
          <div className='flex py-20 gap-3 items-center w-max mx-auto' aria-label='pagination-wrapper'>
            <button onClick={() => decrementPage()}><GoChevronLeft className='text-xs font-bold' /></button>
            <div className='flex items-center gap-3 text-xs font-light' aria-label='page'>
              {
                Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} onClick={() => {
                      navigate(`/${params.category}?page=${ i + 1}`)
                  }} 
                  className={ query.get('page') == i + 1 ? 'activePages pages' : 'pages' }>{i + 1}</div>
                ))
              }
            </div>
            <button onClick={() => incrementPage()}><GoChevronRight className='text-xs font-bold' /></button>
          </div>
      </section>
   </Layout>
  )
}